import { Box, Typography } from '@mui/material';
import MessageInput from './MessageInput';
import Messages from './Messages';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { MessageCircle } from "lucide-react"

const MessageContainer = () => {
    const { selectedConversation } = useConversation();

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            {selectedConversation ? (
                <>
                    {/* Header */}
                    <Box sx={{ backgroundColor: '#64748B', paddingX: 2, paddingY: 1, marginBottom: 2 }}>
                        <Typography variant="body1" color="textSecondary">
                            To: <strong style={{ color: '#1F2937' }}>{selectedConversation.fullName}</strong>
                        </Typography>
                    </Box>

                    <Messages />
                    <MessageInput />
                </>
            ) : (
                <NoChatSelected />
            )}
        </Box>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
	const {authUser} = useAuthContext();

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
			<Box sx={{ paddingX: 4, textAlign: 'center', fontWeight: 'bold', color: 'gray.200' }}>
				<Typography variant="h6">Welcome 👋 {authUser?.fullName} ❄</Typography>
				<Typography variant="body1">Select a chat to start messaging</Typography>
				<MessageCircle className='text-3xl md:text-6xl text-center' />
			</Box>
		</Box>
	);
};
