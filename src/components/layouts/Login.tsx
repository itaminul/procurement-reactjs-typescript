import React from "react";
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import '../../styles/Login.scss'
interface Credadencial {
  username: string;
  password: string;
}
const Login = () => {

  const handleSubmit = async ({ username, password }: Credadencial) => {
    try {
      console.log("user name", username);
      console.log("user password", password);
      // const {username, password} = value;
      // console.log("value", username);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="loginBody">
        <div className="module form-module">
          <div className="toggle"></div>
          <div className="form">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
                <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </form>
          </div>
          <div className="cta">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
