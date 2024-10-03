import { Box } from '@mui/material';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import { useAuthContext } from '../../context/AuthContext';

const Messages = () => {
	const {loading, messages}= useGetMessages();
	const {authUser} = useAuthContext();

	return (
		<Box sx={{ paddingX: 2, flex: 1, overflowY: 'auto' }}>
			{messages.map((message) => (
				<Message key={message?.id} message={message} currentUserId={authUser!.id}  />
			))}
		</Box>
	);
};

export default Messages;
