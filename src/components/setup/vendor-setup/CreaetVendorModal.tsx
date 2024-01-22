// ModalComponent.tsx
import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  // Add other props as needed
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateVendorModal: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
  <Modal open={open} onClose={onClose}
        keepMounted
      //  open={open}
      //  onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
           <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Create</Button>
        </Box>
      </Modal>
  );
};

export default CreateVendorModal;
