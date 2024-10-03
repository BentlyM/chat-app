import { Search } from 'lucide-react';
import { TextField, IconButton } from '@mui/material';
import toast from 'react-hot-toast';
import useConversation, {
  ConversationType,
} from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import React, { useState } from 'react';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('search term must be at least 3 characters log');
    }

    const conversation = conversations.find((c: ConversationType) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error('no such user found!');
  };
  return (
    <form
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      onSubmit={handleSubmitSearch}
    >
      <TextField
        size="small"
        placeholder="Search…"
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: '50px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
          },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ backgroundColor: '#0EA5E9', color: 'white', borderRadius: '50%' }}
      >
        <Search style={{ width: '20px', height: '20px' }} />
      </IconButton>
    </form>
  );
};

export default SearchInput;
