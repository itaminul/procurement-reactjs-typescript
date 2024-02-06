import React, { useState } from "react";
import { Box, Button, List, ListItem, ListItemText, TextField } from "@mui/material";
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
  );
};

export default MessageBox;
