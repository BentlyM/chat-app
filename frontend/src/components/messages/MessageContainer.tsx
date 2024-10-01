import { Box, Typography } from '@mui/material';
import MessageInput from './MessageInput';
import Messages from './Messages';
// import { MessageCircle } from "lucide-react"; // Uncomment if you need it

const MessageContainer = () => {
	return (
		<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
			{/* Header */}
			<Box sx={{ backgroundColor: '#64748B', paddingX: 2, paddingY: 1, marginBottom: 2 }}>
				<Typography variant="body1" color="textSecondary">
					To: <strong style={{ color: '#1F2937' }}>John Doe</strong>
				</Typography>
			</Box>

			<Messages />
			<MessageInput />
		</Box>
	);
};

export default MessageContainer;

// Uncomment if you need the NoChatSelected component
// const NoChatSelected = () => {
// 	return (
// 		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
// 			<Box sx={{ paddingX: 4, textAlign: 'center', fontWeight: 'bold', color: 'gray.200' }}>
// 				<Typography variant="h6">Welcome 👋 John Doe ❄</Typography>
// 				<Typography variant="body1">Select a chat to start messaging</Typography>
// 				<MessageCircle className='text-3xl md:text-6xl text-center' />
// 			</Box>
// 		</Box>
// 	);
// };
