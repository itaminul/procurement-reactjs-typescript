import { Link, NavLink, useNavigate } from "react-router-dom";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { Button, Collapse, ListItemIcon, ListItemText } from "@mui/material";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/authSlice";
import { closeDrawer, openDrawer } from "../../redux/features/drawerSlice";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";

import './sidebarStyle.scss'


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
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
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
      const handleCloseDrawer = () => {
        dispatch(closeDrawer());
      };
      const handleDrawerOpen = () => {
        dispatch(openDrawer());
      };


        const dashboardTitleStyle: React.CSSProperties = {
          marginLeft: isDrawerOpen ? "215px" : "0px",
          transition: "margin-left 0.3s ease-in-out",
          padding: "2px",
        };

        const logoutContentStyle: React.CSSProperties = {
          marginLeft: isDrawerOpen ? "1353px" : "1560px",
          transition: "margin-left 0.3s ease-in-out",
          padding: "2px",
        };

         const [open, setOpen] = React.useState(false);
         const handleClick = () => {
           setOpen(!open);
         };

         const [activeItem, setActiveItem]= useState('');
         
         const handleSubmenuItem = (item: string) => {
          setActiveItem(item);
         }
         
  return (
    <>
      <CssBaseline />
      {isAuthenticated ? (
        <AppBar position="fixed" onClick={handleDrawerOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleCloseDrawer}
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            <Typography sx={dashboardTitleStyle}>Dashboard</Typography>
            <List>
              <ListItem>
                {!isAuthenticated ? (
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                ) : (
                  <>
                    <Button
                      sx={logoutContentStyle}
                      onClick={handleLogout}
                      color="inherit"
                    >
                      Logout
                    </Button>
                  </>
                )}
              </ListItem>
            </List>
          </Toolbar>
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
          open={isDrawerOpen}
          onClose={handleCloseDrawer}
        >
          <DrawerHeader>
            <IconButton onClick={handleCloseDrawer}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Setup" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/item-setup">
                  <ListItem>
                    <ListItemText
                      className="submenu-item"
                      key="item"
                      primary="Item"
                    />
                  </ListItem>
                </Link>
                <Link to="/vendor-setup">
                  <ListItem>
                    <ListItemText
                      className="submenu-item"
                      key="vendor"
                      primary="Vender"
                    />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" />
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
