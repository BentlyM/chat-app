import { Box, Typography, Avatar, Divider, Button } from '@mui/material';
import useConversation, { ConversationType } from '../../zustand/useConversation';
import '../../../public/Button.module.css';

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;

  return (
    <>
      <Button
        onClick={() => setSelectedConversation(conversation)}
        variant="contained" // You can change this to 'text' or 'outlined' as needed
        sx={{
          backgroundColor: isSelected ? 'transparent' : 'default',
          justifyContent: 'flex-start', // Aligns content properly
          width: '100%', // Makes the button full width
          padding: 1, // Adjust padding as necessary
          textTransform: 'none' // Prevents text transformation (optional)
        }}
      >
        <Avatar
          src={conversation.profilePic}
          alt="user avatar"
          sx={{ width: 32, height: 32, marginRight: 2 }} // Adds margin for spacing
        />

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
