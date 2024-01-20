import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import './chatBoard.scss'

interface ChatboxProps {
  onClose: () => void;
}


const Chatbox = ({ onClose }: ChatboxProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <Paper className="chatboxContainer">
      <div className="chatboxHeader">
        <div>Chat</div>
        <Button onClick={onClose}>Close</Button>
      </div>
      <div className="chatboxContent">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div className="inputContainer">
        <TextField
          className="inputField"
          variant="outlined"
          size="small"
          label="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </Paper>
    
    // <Box className="chatboxContainer">
    //   <List className="messagesContainer">
    //     {messages.map((msg, index) => (
    //       <ListItem key={index}>
    //         <ListItemText primary={msg} />
    //       </ListItem>
    //     ))}
    //   </List>
    //   <Box className="inputContainer">
    //     <TextField
    //       variant="outlined"
    //       size="small"
    //       label="Type a message"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       className="inputField"
    //     />
    //     <Button variant="contained" color="primary" onClick={handleSendMessage}>
    //       Send
    //     </Button>
    //   </Box>
    // </Box>
  );
};

export default Chatbox;
