import { ReactNode, useState } from "react";
import TopBar from "./TopBar";
import AdminSidebar from "./AdminSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Container, Grid } from "@mui/material";

interface props {
  children?: ReactNode;
}
const Layout = ({ children }: props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isAuthenticatedCheck = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Content */}
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          marginLeft: sidebarOpen ?"240px" : "320px",
          padding: "20px",
          transition: "margin-left 0.3s",
          height: "auto",
          marginTop: "-400px",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 1800,
          },
          "@media (max-width:600px)": {
            fontSize: "14px",
            padding: "16px",
          },
          "@media (min-width:601px) and (max-width:960px)": {
            fontSize: "16px",
            padding: "20px",
          },
          "@media (min-width:961px)": {
            fontSize: "18px",
            padding: "24px",
          },
        }}
      >
        {children}
      </Box>
      {/* <main>{children}</main> */}
    </>
  );
};

export default Layout;

/*

        <Container component="main" sx={{}}>
          <Grid container justifyContent="center">
            <Grid xs={12}>
               <Paper
        sx={{
          p: 2,
          marginLeft: 90,
          marginTop: "-380px",
          maxWidth: 1500,
          flexGrow: 1,
        }}
      > </Paper>
             {children}
            </Grid>
          </Grid>
        </Container>
*/
