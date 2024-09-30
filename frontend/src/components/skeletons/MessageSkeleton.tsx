import { Box, Skeleton } from '@mui/material';

const MessageSkeleton = () => {
	return (
		<>
			<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
				<Skeleton variant="circular" width={40} height={40} />
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
					<Skeleton variant="text" width={160} height={16} />
					<Skeleton variant="text" width={160} height={16} />
				</Box>
			</Box>
			<Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
					<Skeleton variant="text" width={160} height={16} />
				</Box>
				<Skeleton variant="circular" width={40} height={40} />
			</Box>
		</>
	);
};

export default MessageSkeleton;
