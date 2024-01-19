// MessageBox.tsx
import React, { useState } from "react";
import { Button, Snackbar } from "@mui/material";
import './MessageBox.scss'

const MessageBox: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="mesasgeBox">
      <Button variant="contained" color="primary" onClick={handleToggle}>
        Toggle Message Box
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleToggle}
        message="This is a message box"
      />
    </div>
  );
};

export default MessageBox;
