import { Box } from '@mui/material';
import Conversation from './Conversation';
import { Key } from 'react';
import { DUMMY_CONVERSATIONS } from '../../dummy_data/dummy';

const Conversations = () => {
	return (
		<Box sx={{ py: 2, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
			{DUMMY_CONVERSATIONS.map((conversation: { id: Key | null | undefined; }) => (
				<Conversation key={conversation.id} conversation={conversation} />
			))}
		</Box>
	);
};

export default Conversations;
