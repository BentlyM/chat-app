import { Box, TextField, IconButton } from '@mui/material';
import { Send } from 'lucide-react';

const MessageInput = () => {
	return (
		<form style={{ padding: '16px 16px 24px', marginBottom: '12px' }}>
			<Box sx={{ position: 'relative', width: '100%' }}>
				<TextField
					variant="outlined"
					placeholder="Send a message"
					fullWidth
					size="small"
					sx={{
						backgroundColor: '#4B5563', // Gray-700
						borderRadius: '8px',
						'& .MuiOutlinedInput-notchedOutline': {
							borderColor: '#4B5563', // Gray-600
						},
						'& .MuiInputBase-input': {
							color: 'white',
						},
						'&:hover .MuiOutlinedInput-notchedOutline': {
							borderColor: '#A1A1AA', // Adjust hover color as needed
						},
					}}
				/>
				<IconButton
					type="submit"
					sx={{
						position: 'absolute',
						right: 0,
						top: '50%',
						transform: 'translateY(-50%)',
						color: 'white',
					}}
				>
					<Send style={{ width: '24px', height: '24px' }} />
				</IconButton>
			</Box>
		</form>
	);
};

export default MessageInput;
