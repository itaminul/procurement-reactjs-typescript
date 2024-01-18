import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import { RootState } from "../../redux/store";

interface props {
  children?: ReactNode;
}
import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
const Layout = ({ children }: props) => {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen)
  const mainContentStyle: React.CSSProperties = {
  marginLeft: isDrawerOpen ? "160px" : "20px",
  transition: "margin-left 0.3s ease-in-out", 
  padding: "2px",
  marginTop: "-380px",
  maxWidth: 1500,
};

  return (
    <>
      <AdminSidebar />
      <Container component="main" sx={mainContentStyle}>
        <Grid container justifyContent="center">
          <Grid>
            {children}
          </Grid>
        </Grid>
      </Container>
      {/* <main style={mainContentStyle}>{children}</main> */}
    </>
  );
};

export default Layout;
