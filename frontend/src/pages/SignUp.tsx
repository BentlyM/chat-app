import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import GenderCheckbox from '../components/GenderCheckbox'; // Ensure you import your GenderCheckbox component

const SignUp = () => {
	return (
		<Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
			<Box sx={{ padding: 4, borderRadius: 2, boxShadow: 3, backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
				<Typography variant="h4" align="center" gutterBottom>
					Sign Up <span style={{ color: '#2196F3' }}>ChatApp</span>
				</Typography>

				<form>
					<Box marginBottom={2}>
						<TextField
							label="Full Name"
							placeholder="John Doe"
							variant="outlined"
							fullWidth
						/>
					</Box>

					<Box marginBottom={2}>
						<TextField
							label="Username"
							placeholder="johndoe"
							variant="outlined"
							fullWidth
						/>
					</Box>

					<Box marginBottom={2}>
						<TextField
							label="Password"
							placeholder="Enter Password"
							type="password"
							variant="outlined"
							fullWidth
						/>
					</Box>

					<Box marginBottom={2}>
						<TextField
							label="Confirm Password"
							placeholder="Confirm Password"
							type="password"
							variant="outlined"
							fullWidth
						/>
					</Box>

					<GenderCheckbox />

					<Link to="/login" style={{ textDecoration: 'none', marginBottom: 16, display: 'block', textAlign: 'center' }}>
						<Typography variant="body2" color="white" sx={{ '&:hover': { color: '#2196F3' } }}>
							Already have an account?
						</Typography>
					</Link>

					<Button variant="contained" color="primary" fullWidth>
						Sign Up
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default SignUp;
