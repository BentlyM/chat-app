import { Box } from '@mui/material';
import Conversation from './Conversation';
import { Key } from 'react';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {

	const { conversations} = useGetConversations();
	return (
		<Box sx={{ py: 2, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
			{conversations.map((conversation: { id: Key | null | undefined; }) => (
				<Conversation key={conversation.id} conversation={conversation} />
			))}
		</Box>
	);
};

export default Conversations;
