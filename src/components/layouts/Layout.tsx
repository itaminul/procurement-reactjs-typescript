import { ReactNode, useState } from "react";
import TopBar from "./TopBar";
import AdminSidebar from "./AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Container, Grid } from "@mui/material";
import { openDrawer, closeDrawer } from "../../redux/features/drawerSlice";
interface props {
  children?: ReactNode;
}
const Layout = ({ children }: props) => {
  const dispatch = useDispatch();

const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen);

const handleCloseDrawer = () => {
  dispatch(closeDrawer());
};

console.log("isDrawerOpen", isDrawerOpen);
const mainContentStyle: React.CSSProperties = {
  marginLeft: isDrawerOpen ? "4px" : "12px",
  transition: "margin-left 0.3s",
  padding: "2px",
};
  return (
    <>
      <AdminSidebar  />
      {/* Content */}
      <Box display="flex" style={mainContentStyle}>
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
