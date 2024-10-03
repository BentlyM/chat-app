import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { AuthUserType } from '../../context/AuthContext';
import { ConversationType } from '../../zustand/useConversation';
import { formatDate } from '../../misc/formateData';

interface MessageProps {
	message?: {
		senderId: string; // ID of the user who sent the message
		body: string;     // Message content
		id: string; 
		createdAt: string;      // Unique ID for the message
	};
	currentUser: AuthUserType; // ID of the current user
	selectedConversation: ConversationType | null;
}

const Message: React.FC<MessageProps> = ({ message, currentUser, selectedConversation }) => {
	if (!message) return null; // Handle case when message is undefined

	const fromMe = message.senderId === currentUser.id; // Check if the senderId matches the current user's ID
	const img = fromMe
		? currentUser?.profilePic // Replace with dynamic username logic
		: selectedConversation?.profilePic; // Replace with dynamic username logic

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: fromMe ? 'flex-end' : 'flex-start',
				marginY: 1,
			}}
		>
			{!fromMe && (
				<Avatar
					src={img}
					alt="User Avatar"
					sx={{ width: 40, height: 40, display: { xs: 'none', md: 'block' } }}
				/>
			)}
			<Typography
				variant="body2"
				sx={{
					backgroundColor: fromMe ? '#3B82F6' : 'grey.500', // Blue for sent messages, grey for received
					color: 'white',
					padding: 1,
					borderRadius: 2,
					maxWidth: '75%',
					textAlign: fromMe ? 'right' : 'left',
				}}
			>
				{message.body}
			</Typography>
			{fromMe && (
				<Avatar
					src={img}
					alt="User Avatar"
					sx={{ width: 40, height: 40, display: { xs: 'none', md: 'block' } }}
				/>
			)}
			<Typography variant="caption" sx={{ opacity: 0.5, marginLeft: 1, color: 'white' }}>
				{/* You can replace this static time with dynamic timestamp logic if needed */}
				{formatDate(message.createdAt)}
			</Typography>
		</Box>
	);
};

export default Message;
