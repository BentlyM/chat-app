import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';
import useSignup from '../hooks/useSignup';

const SignUp = () => {
  const { authUser } = useAuthContext();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const {loading,signup} = useSignup()

  const navigate = useNavigate();
  
  if (authUser) navigate('/');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    signup(inputs);
  }

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
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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

          <form id="register-form" onSubmit={handleRegister}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }}
                label="Your Name"
                variant="outlined"
                name="fullName"
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }}
                label="Your Username"
                variant="outlined"
                type="text"
                name="username"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }}
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                sx={{ width: '250px' }}
                label="Repeat Password"
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                required
              />
            </Box>

            {/* Gender Selection */}
            <FormControl component="fieldset" sx={{ mb: 2 }}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup 
              row 
              name="gender"
              value={inputs.gender}
              onChange={(e) => setInputs({...inputs, gender: e.target.value})}
              >
                <FormControlLabel value="male" control={<Radio />} label="Boy" />
                <FormControlLabel value="female" control={<Radio />} label="Girl" />
              </RadioGroup>
            </FormControl>

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
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? "loading..." : "Register"}
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
