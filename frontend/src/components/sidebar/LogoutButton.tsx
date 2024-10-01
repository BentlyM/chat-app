import { IconButton } from '@mui/material';
import { LogOut } from 'lucide-react'; // Ensure you have this import
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
	const {logout} = useLogout();

	return (
		<div style={{ marginTop: 'auto' }}>
			<IconButton onClick={logout} sx={{ color: 'white' }}>
				<LogOut style={{ width: '24px', height: '24px' }} />
			</IconButton>
		</div>
	);
};

export default LogoutButton;
