import {
  Box,
  Typography,
  Avatar,
  Divider,
  Button,
  styled,
  Badge,
  BadgeProps,
} from '@mui/material';
import useConversation, {
  ConversationType,
} from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';
import { useEffect, useState } from 'react';

interface StyledBadgeProps extends BadgeProps {
  isOnline: boolean;
}

const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'isOnline',
})<StyledBadgeProps>(({ theme, isOnline }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: isOnline ? '#44b700' : '#d32f2f',
    color: isOnline ? '#44b700' : '#d32f2f',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    position: 'relative',
  },
}));

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;

  const { onlineUsers } = useSocketContext();
  const [isOnline, setIsOnline] = useState<boolean>(false);

  console.log(`isOnline: ${isOnline}`);

  useEffect(() => {
    // Check if the conversation user is online
    setIsOnline(onlineUsers.includes(conversation.id));
  }, [onlineUsers, conversation.id]);

  return (
    <>
      <Button
        onClick={() => setSelectedConversation(conversation)}
        variant="contained"
        sx={{
          backgroundColor: isSelected ? 'transparent' : 'default',
          justifyContent: 'flex-start',
          width: '100%',
          padding: 1,
          textTransform: 'none',
        }}
      >
        <StyledBadge
          isOnline={isOnline}
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            src={conversation.profilePic}
            alt="user avatar"
            sx={{ width: 32, height: 32, marginRight: -0.5 }}
          />
        </StyledBadge>

        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold', color: 'gray.200' }}
            >
              {conversation.fullName}
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              {/* Placeholder for additional info */}
            </Typography>
          </Box>
        </Box>
      </Button>

      <Divider sx={{ my: 0 }} />
    </>
  );
};

export default Conversation;
