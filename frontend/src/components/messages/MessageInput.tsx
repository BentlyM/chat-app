import { Box, TextField, IconButton, CircularProgress } from '@mui/material';
import { Send } from 'lucide-react';
import React, { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const { loading, sendMessage } = useSendMessage();

  const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form
      style={{ padding: '16px 16px 24px', marginBottom: '12px' }}
      onSubmit={handleSubmitMessage}
    >
      <Box sx={{ position: 'relative', width: '100%' }}>
        <TextField
          variant="outlined"
          placeholder="Send a message"
          fullWidth
          size="small"
          sx={{
            backgroundColor: '#4B5563',
            borderRadius: '8px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4B5563',
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#A1A1AA',
            },
          }}
		  value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Send style={{ width: '24px', height: '24px' }} />
          )}
        </IconButton>
      </Box>
    </form>
  );
};

export default MessageInput;
