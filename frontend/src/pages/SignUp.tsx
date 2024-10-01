import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const SignUp = () => {
  const {authUser, setAuthUser, isLoading} = useAuthContext();
  const navigate = useNavigate();

  if(isLoading) return null;
  if(authUser)return navigate('/');

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '80%',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          boxShadow: ' 0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flex: 1,
            height: 'fit-content',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bolder', mb: 2 }}>
            Sign Up
          </Typography>

          <form id="register-form">
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }} // Adjust the width here
                label="Your Name"
                variant="outlined"
                name="fullName"
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }} // Adjust the width here
                label="Your Username"
                variant="outlined"
                type="text"
                name="username"
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }} // Adjust the width here
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }} // Adjust the width here
                label="Repeat Password"
                variant="outlined"
                type="password"
                name="confirmPassword"
                required
              />
            </Box>
            <FormControlLabel
              control={<Checkbox name="agree-term" color="primary" />}
              label={
                <span>
                  I agree to all statements in{' '}
                  <Link href="#" underline="hover">
                    Terms of Service
                  </Link>
                </span>
              }
            />
            <Box sx={{ mt: 2 }}>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </form>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <img
            src="signup-image.jpg"
            alt="Sign Up"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Link href="/login" sx={{ mt: 2 }}>
            I am already a member
          </Link>
        </Box>
      </div>
    </Container>
  );
};

export default SignUp;
