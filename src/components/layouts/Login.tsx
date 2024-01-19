import React, { useState } from "react";
import {  useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Typography,
  Container,
  Button,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import './LoginForm.scss'
import { login } from "../../redux/features/authSlice";
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

      if(username === 'admin' && password==='123456'){
         dispatch(login());
         navigateTo("/admin");
      }else{
        setError("Invalid credentials");

      }
      // if (isAuthenticated) {
      //   dispatch(login());
      //   navigateTo('/admin'); // Redirect to admin panel
      // } else {
      //   setError('Invalid credentials');
      // }
    } catch (error) {
      setError('An error occurred');
    }
    
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container component="main">
        <CssBaseline />
        <div
          className={`login-form-container ${
            isSmallScreen ? "small-screen" : ""
          }`}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{ marginLeft: "650px" }}
          >
            Sign in
          </Typography>
          <form className="login-form" noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
