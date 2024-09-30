import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface MessageProps {
	message?: {
		body: string;
		fromMe: boolean;
	};
}

const Message: React.FC<MessageProps> = ({ message }) => {
	if (!message) return null; // Handle case when message is undefined

	const fromMe = message.fromMe;
	const img = fromMe
		? "https://avatar.iran.liara.run/public/boy?username=johndoe"
		: "https://avatar.iran.liara.run/public/boy?username=janedoe";

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
				22:59
			</Typography>
		</Box>
	);
};

export default Message;
