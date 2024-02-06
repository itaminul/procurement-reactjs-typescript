import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/authSlice";

const TopBar = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const handleLogout = () => {
    dispatch(logout());
    navigateTo("/login");
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
