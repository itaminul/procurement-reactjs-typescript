import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}
const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
const [message, setMessage] = useState("");
const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div>
      <TextField
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
  );
};

export default MessageInput;
