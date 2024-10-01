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
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const {authUser} = useAuthContext();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const {loading, login} = useLogin();

  const navigate = useNavigate();

  if(authUser) navigate('/');

  const handleLogin = async (e:React.FormEvent) => {
    e.preventDefault();
    login(inputs.username, inputs.password);
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
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
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <img
            src="signin-image.jpg"
            alt="Sign In"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Link href="/signup" sx={{ mt: 2 }}>
            Create an account
          </Link>
        </Box>
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
            Log In
          </Typography>

          <form id="login-form" onSubmit={handleLogin}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }} // Adjust the width here
                label="Username"
                variant="outlined"
                name="username"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
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
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                required
              />
            </Box>
            <FormControlLabel
              control={<Checkbox name="remember-me" color="primary" />}
              label="Remember me"
            />
            <Box sx={{ mt: 2 }}>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading? "loading..." : "Login"}
              </Button>
            </Box>
          </form>
        </Box>
      </div>
    </Container>
  );
};

export default Login;
