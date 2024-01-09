import React from "react";
import { Button, Box, Container, Typography, TextField} from "@mui/material";
import '../../styles/Login.scss'
interface Credadencial {
  username: string;
  password: string;
}
const Login = () => {

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
   ) => {
    //e.preventDefault();
 e.preventDefault();
    console.log("before");
    try {
      // console.log("user name", username);
      // console.log("user password", password);
      // const {username, password} = value;
      // console.log("value", username);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Container sx={{
        marginLeft: 36
      }}>
        <Box
          sx={{
            display: "flex",
            marginLeft: 26,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              width: "100%",
              "& .MuiTextField-root": {
                margin: "8px",
                width: "100%",
              },
              "& .MuiButton-root": {
                margin: "8px",
                width: "100%",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="username"
              label="Username"
              variant="outlined"
              //  value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
