import { Box, Divider } from '@mui/material';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';

const Sidebar = () => {
	return (
		<Box
			sx={{
				borderRight: '1px solid #64748B', // Customize border color
			 padding: 1,
			 md: { padding: 4 },
			 width: { xs: '44%', md: '50%' },
			 display: 'flex',
			 flexDirection: 'column'
			}}
		>
			<SearchInput />
			<Divider sx={{ marginY: 1 }} /> {/* Use Divider for separation */}
			<Conversations />
			<LogoutButton />
		</Box>
	);
};

export default Sidebar;
