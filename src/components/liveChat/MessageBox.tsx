// MessageBox.tsx
import React, { useState } from "react";
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Snackbar, TextField, Typography } from "@mui/material";
import './MessageBox.scss'
import SendIcon from "@material-ui/icons/Send";
const MessageBox: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div>
      <Box className="chatContainer">
        <List className="messagesContainer">
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg} />
            </ListItem>
          ))}
        </List>
        <Box className="inputContainer">
          <TextField
          style={{width: '1000px'}}
            className="inputField"
            variant="outlined"
            size="small"
            label="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </div>
    // <div style={{ marginLeft: "1600px" }}>
    //   <Button
    //     style={{ marginLeft: "30px", marginBottom: "-900px" }}
    //     variant="contained"
    //     color="primary"
    //     onClick={handleToggle}
    //   >
    //     Toggle Message Box
    //   </Button>
    //   <Snackbar message="This is a message box" />
    //   <TextField open={open} autoHideDuration={6000} onClose={handleToggle} />

    //   <div>
    //     <Grid container>
    //       <Grid item xs={12}>
    //         <Typography variant="h5" className="header-message">
    //           Chat
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //     <Grid container className="chatSection">
    //       <Grid item xs={3} className="borderRight500">
    //         <List>
    //           <ListItem button key="RemySharp">
    //             <ListItemIcon>
    //               <Avatar
    //                 alt="Remy Sharp"
    //                 src="https://material-ui.com/static/images/avatar/1.jpg"
    //               />
    //             </ListItemIcon>
    //             <ListItemText primary="John Wick"></ListItemText>
    //           </ListItem>
    //         </List>
    //         <Divider />
    //         <Grid item xs={12} style={{ padding: "10px" }}>
    //           <TextField
    //             id="outlined-basic-email"
    //             label="Search"
    //             variant="outlined"
    //             fullWidth
    //           />
    //         </Grid>
    //         <Divider />
    //         <List>
    //           <ListItem button key="RemySharp">
    //             <ListItemIcon>
    //               <Avatar
    //                 alt="Remy Sharp"
    //                 src="https://material-ui.com/static/images/avatar/1.jpg"
    //               />
    //             </ListItemIcon>
    //             <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
    //             <ListItemText secondary="online"></ListItemText>
    //           </ListItem>
    //           <ListItem button key="Alice">
    //             <ListItemIcon>
    //               <Avatar
    //                 alt="Alice"
    //                 src="https://material-ui.com/static/images/avatar/3.jpg"
    //               />
    //             </ListItemIcon>
    //             <ListItemText primary="Alice">Alice</ListItemText>
    //           </ListItem>
    //           <ListItem button key="CindyBaker">
    //             <ListItemIcon>
    //               <Avatar
    //                 alt="Cindy Baker"
    //                 src="https://material-ui.com/static/images/avatar/2.jpg"
    //               />
    //             </ListItemIcon>
    //             <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
    //           </ListItem>
    //         </List>
    //       </Grid>
    //       <Grid item xs={9} className="messageArea">
    //         <List>
    //           <ListItem key="1">
    //             <Grid container>
    //               <Grid item xs={12}>
    //                 <ListItemText primary="Hey man, What's up ?"></ListItemText>
    //               </Grid>
    //               <Grid item xs={12}>
    //                 <ListItemText secondary="09:30"></ListItemText>
    //               </Grid>
    //             </Grid>
    //           </ListItem>
    //           <ListItem key="2">
    //             <Grid container>
    //               <Grid item xs={12}>
    //                 <ListItemText primary="Hey, Iam Good! What about you ?"></ListItemText>
    //               </Grid>
    //               <Grid item xs={12}>
    //                 <ListItemText secondary="09:31"></ListItemText>
    //               </Grid>
    //             </Grid>
    //           </ListItem>
    //           <ListItem key="3">
    //             <Grid container>
    //               <Grid item xs={12}>
    //                 <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
    //               </Grid>
    //               <Grid item xs={12}>
    //                 <ListItemText secondary="10:30"></ListItemText>
    //               </Grid>
    //             </Grid>
    //           </ListItem>
    //         </List>
    //         <Divider />
    //         <Grid container style={{ padding: "20px" }}>
    //           <Grid item xs={11}>
    //             <TextField
    //               id="outlined-basic-email"
    //               label="Type Something"
    //               fullWidth
    //             />
    //           </Grid>
    //           <Grid>
    //             <Fab color="primary" aria-label="add">
    //               <SendIcon />
    //             </Fab>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </div>
    // </div>
  );
};

export default MessageBox;
