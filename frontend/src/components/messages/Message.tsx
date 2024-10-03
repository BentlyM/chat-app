import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface MessageProps {
	message?: {
		senderId: string; // ID of the user who sent the message
		body: string;     // Message content
		id: string;       // Unique ID for the message
	};
	currentUserId: string; // ID of the current user
}

const Message: React.FC<MessageProps> = ({ message, currentUserId }) => {
	if (!message) return null; // Handle case when message is undefined

	const fromMe = message.senderId === currentUserId; // Check if the senderId matches the current user's ID
	const img = fromMe
		? "https://avatar.iran.liara.run/public/boy?username=johndoe" // Replace with dynamic username logic
		: "https://avatar.iran.liara.run/public/boy?username=janedoe"; // Replace with dynamic username logic

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: fromMe ? 'flex-end' : 'flex-start',
				marginY: 1,
			}}
		>
			{!fromMe && (
				<Avatar
					src={img}
					alt="User Avatar"
					sx={{ width: 40, height: 40, display: { xs: 'none', md: 'block' } }}
				/>
			)}
			<Typography
				variant="body2"
				sx={{
					backgroundColor: fromMe ? '#3B82F6' : 'grey.500', // Blue for sent messages, grey for received
					color: 'white',
					padding: 1,
					borderRadius: 2,
					maxWidth: '75%',
					textAlign: fromMe ? 'right' : 'left',
				}}
			>
				{message.body}
			</Typography>
			{fromMe && (
				<Avatar
					src={img}
					alt="User Avatar"
					sx={{ width: 40, height: 40, display: { xs: 'none', md: 'block' } }}
				/>
			)}
			<Typography variant="caption" sx={{ opacity: 0.5, marginLeft: 1, color: 'white' }}>
				{/* You can replace this static time with dynamic timestamp logic if needed */}
				22:59
			</Typography>
		</Box>
	);
};

export default Message;
