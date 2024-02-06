import { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import './chatBoard.scss'

interface ChatboxProps {
  onClose: () => void;
}

import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const Chatbox = ({ onClose }: ChatboxProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };
  const [showChatbox, setShowChatbox] = useState(false);

  return (
    <Paper className="chatboxContainer">
      <div className="chatboxHeader">
        <div>Chat</div>
        <IconButton className="chatIcon" onClick={onClose}>
          {!showChatbox ? <CloseIcon /> : <SendIcon />}
        </IconButton>
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
  );
};

export default Chatbox;
