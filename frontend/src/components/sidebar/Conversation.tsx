import { Box, Typography, Avatar, Divider } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Conversation = ({ conversation } : {conversation: any}) => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					padding: 1,
					borderRadius: 1,
					'&:hover': {
						backgroundColor: '#0EA5E9', // Sky-500
					},
					cursor: 'pointer',
				}}
			>
				<Avatar
					src={conversation.profilePic}
					alt="user avatar"
					sx={{ width: 32, height: 32 }} // Adjust size as needed
				/>

				<Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Typography variant="body1" sx={{ fontWeight: 'bold', color: 'gray.200' }}>
							{conversation.fullName}
						</Typography>
						<Typography variant="h6" sx={{ display: { xs: 'none', md: 'block' } }}>
							{conversation.emoji}
						</Typography>
					</Box>
				</Box>
			</Box>

			<Divider sx={{ my: 0 }} />
		</>
	);
};

export default Conversation;
