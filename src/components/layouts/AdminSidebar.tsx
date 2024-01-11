import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";



import { useDispatch, useSelector } from "react-redux";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import TopBar from "./TopBar";
import { Button } from "@mui/material";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/authSlice";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const AdminSidebar = () => {
    const dispatch = useDispatch();
      const navigateTo = useNavigate();
     const isAuthenticated = useSelector(
       (state: RootState) => state.auth.isAuthenticated
     );

       const handleLogout = () => {
         dispatch(logout());
         navigateTo("/login");
       };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      {isAuthenticated ? (
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            <Typography sx={{ flexGrow: 1 }}>Dashboard</Typography>
            <List>
              <ListItem>
                {!isAuthenticated ? (
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleLogout} color="inherit">
                      Logout
                    </Button>
                  </>
                )}
              </ListItem>
            </List>
          </Toolbar>
          {/* <Typography  sx={{ flexGrow: 1 }}>
          {!isAuthenticated ? (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          ) : (
            <>
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </>
          )}
        </Typography> */}
        </AppBar>
      ) : (
        ""
      )}
      {isAuthenticated ? (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <Link to="/inbox">
                  <ListItemText>Inbox</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={2} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminSidebar;
