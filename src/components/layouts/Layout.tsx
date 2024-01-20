import { ReactNode, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { RootState } from "../../redux/store";

interface props {
  children?: ReactNode;
}
import { Container, Fab, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ChatBoard from "../liveChat/ChatBoard";
import MessageBox from "../liveChat/MessageBox";
import Chatbox from "../liveChat/ChatBoard";
import ChatIcon from "@mui/icons-material/Chat";
const Layout = ({ children }: props) => {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen)
  const mainContentStyle: React.CSSProperties = {
  marginLeft: isDrawerOpen ? "160px" : "0px",
  transition: "margin-left 0.3s ease-in-out", 
  padding: "2px",
  marginTop: "-380px",
  maxWidth: 1500,
};

const [isChatboxOpen, setChatboxOpen] = useState(false);

const toggleChatbox = () => {
  setChatboxOpen(!isChatboxOpen);
};

  return (
    <>
      <AdminSidebar />
      {/* <ChatBoard /> */}
      {/* <MessageBox /> */}
      {isChatboxOpen && <Chatbox onClose={toggleChatbox} />}
      <Fab className="" color="primary" onClick={toggleChatbox}>
        <ChatIcon />
      </Fab>
      <Container component="main" sx={mainContentStyle}>
        <Grid container justifyContent="center">
          <Grid>{children}</Grid>
        </Grid>
      </Container>
      {/* <main style={mainContentStyle}>{children}</main> */}
    </>
  );
};

export default Layout;
