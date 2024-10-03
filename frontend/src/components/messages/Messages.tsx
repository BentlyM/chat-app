import { Box, CircularProgress } from '@mui/material';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import useListenMessages from '../../hooks/useListenMessages';
import useChatScroll from '../../hooks/useChatScroll';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const scrollRef = useChatScroll(messages);
  useListenMessages();

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{ paddingX: 2, flex: 1, overflowY: 'auto' }}
      ref={scrollRef}
    >
      {!loading &&
        messages.map((message) => (
          <Message
            key={message?.id}
            message={message}
            currentUser={authUser!}
            selectedConversation={selectedConversation}
          />
        ))}

      {!loading && messages.length === 0 && (
        <p style={{ textAlign: 'center', color: 'white' }}>
          Send a message to start conversation
        </p>
      )}
    </Box>
  );
};

export default Messages;
