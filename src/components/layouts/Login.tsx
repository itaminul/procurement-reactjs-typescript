import React, { useState } from "react";
import {  useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login as authService } from '../../redux/services/authService';
import { loginSuccess } from '../../redux/services/authReducer';

import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Grid,
} from '@mui/material';
import '../../styles/Login.scss'
interface Credadencial {
  username: string;
  password: string;
}
const Login = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = "admin";
    const password = "123456";

    try {
      const isAuthenticated = await authService({ username, password });

      if (isAuthenticated) {
        dispatch(loginSuccess());
        navigateTo('/admin'); // Redirect to admin panel
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred');
    }
    
    // if(username === 'admin' && password==='123456'){
    //  const isAuth =  localStorage.setItem('isAuthenticated', 'true'); 
    //  console.log('a', isAuth);
    //   navigateTo('/admin');
    //   console.log('login', isAuth);
    // }else{
    //   console.log("not login");
    // }
    
  };

  return (
    <>
        <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" sx={{ mt: 1, width: '100%' }} onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
     
    </>
  );
};

export default Login;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

