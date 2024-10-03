import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { getReceiverSocketId, io } from '../socket/socket';

const prisma = new PrismaClient();

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: {
          hasEvery: [senderId, receiverId],
        },
      },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          participantIds: {
            set: [senderId, receiverId],
          },
        },
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        senderId,
        body: message,
        conversationId: conversation.id,
      },
    });

    if (newMessage) {
      conversation = await prisma.conversation.update({
        where: {
          id: conversation.id,
        },
        data: {
          messages: {
            connect: {
              id: newMessage.id,
            },
          },
        },
      });
    }

    // socket io will go here
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverId) {
      io.to(receiverSocketId).emit('newMessage', newMessage);
    }

    return res.status(201).json(newMessage);
  } catch (error: any) {
    console.error('Error in sendMessage', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user.id;

    const conversation = await prisma.conversation.findFirst({
      where: {
        participantIds: {
          hasEvery: [senderId, userToChatId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    if (!conversation) {
      return res.status(200).json([]);
    }

    return res.status(200).json(conversation.messages);
  } catch (error: any) {
    console.error('Error in getMessages: ', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserForSidebar = async (req: Request, res: Response) => {
  try {
    const authUserId = req.user.id;

    const users = await prisma.user.findMany({
      where: {
        id: {
          not: authUserId,
        },
      },
      select: {
        id: true,
        fullName: true,
        profilePic: true,
      },
    });

    return res.status(200).json(users);
  } catch (error: any) {
    console.error('Error in getUserForSidebar', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
