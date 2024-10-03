import { Box } from '@mui/material';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {

	const { conversations} = useGetConversations();
	return (
		<Box sx={{ py: 2, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
			{conversations.map((conversation: { id: string; fullName: string , profilePic: string }) => (
				<Conversation key={conversation.id} conversation={conversation} />
			))}
		</Box>
	);
};

export default Conversations;
