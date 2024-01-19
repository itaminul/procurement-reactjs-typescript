import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import './chatBoard.scss'

const Chatbox: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <Box className="chatboxContainer">
      <List className="messagesContainer">
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg} />
          </ListItem>
        ))}
      </List>
      <Box className="inputContainer">
        <TextField
          variant="outlined"
          size="small"
          label="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="inputField"
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbox;
