import { Box } from '@mui/material';
import { DUMMY_MESSAGES } from '../../dummy_data/dummy';
import Message from './Message';

const Messages = () => {
	return (
		<Box sx={{ paddingX: 2, flex: 1, overflowY: 'auto' }}>
			{DUMMY_MESSAGES.map((message: { body: string; fromMe: boolean; id: number } | undefined) => (
				<Message key={message?.id} message={message} />
			))}
		</Box>
	);
};

export default Messages;
