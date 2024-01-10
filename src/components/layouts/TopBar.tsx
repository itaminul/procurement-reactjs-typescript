import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/authSlice";

interface TopBarProps {
  isAuthenticated: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

const TopBar = () => {
  const dispatch = useDispatch();
   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ATI
        </Typography>
        {!isAuthenticated ? (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        ) : (
          <>           
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
