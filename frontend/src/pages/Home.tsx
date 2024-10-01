import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from '../components/sidebar/Sidebar'; // Ensure to import your Sidebar component
import MessageContainer from '../components/messages/MessageContainer'; // Ensure to import your MessageContainer component
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Home = () => {
    const {authUser, setAuthUser, isLoading} = useAuthContext();
    const navigate = useNavigate();

    if(isLoading) return null;
    if(!authUser)return navigate('/login');

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%'}}>
            <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Messaging App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(128, 128, 128, 0.5)',
                    backdropFilter: 'blur(10px)', // Adjust blur effect as needed
                }}
            >
                <Sidebar />
                <MessageContainer />
            </Box>
        </Box>
    );
};

export default Home;
