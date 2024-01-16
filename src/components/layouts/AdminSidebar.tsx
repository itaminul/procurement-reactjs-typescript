import { styled, useTheme } from "@mui/material/styles";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";

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
import { Button, ListItemIcon, ListItemText } from "@mui/material";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/authSlice";
import { toggleSidebar } from "../../redux/features/sidebarSlice";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));


const AdminSidebar = () => {
    const dispatch = useDispatch();
      const navigateTo = useNavigate();
     const isAuthenticated = useSelector(
       (state: RootState) => state.auth.isAuthenticated
     );

     const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen);

       const handleLogout = () => {
         dispatch(logout());
         navigateTo("/login");
       };

  const theme = useTheme();
  const [open, setOpen] = React.useState(isDrawerOpen);
console.log('open', open)
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
        <AppBar position="fixed" onClick={handleDrawerOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClose}
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
                <Button onClick={handleLogout} color="inherit">
                  Logout
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
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
            <ListItem key={2} disablePadding>
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
