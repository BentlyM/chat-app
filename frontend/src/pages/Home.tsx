import { Box } from '@mui/material';
import Sidebar from '../components/sidebar/Sidebar'; // Ensure to import your Sidebar component
import MessageContainer from '../components/messages/MessageContainer'; // Ensure to import your MessageContainer component

const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				height: '80vh',
				width: '100%',
				maxWidth: { xs: '100%', md: 'md' },
				borderRadius: 2,
				overflow: 'hidden',
				backgroundColor: 'rgba(128, 128, 128, 0.5)',
				backdropFilter: 'blur(10px)', // Adjust blur effect as needed
			}}
		>
			<Sidebar />
			<MessageContainer />
		</Box>
	);
};

export default Home;
