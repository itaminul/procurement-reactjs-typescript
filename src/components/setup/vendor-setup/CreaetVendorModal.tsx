// ModalComponent.tsx
import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import '../../../styles/modalStyles.scss'
interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalStyleLg: any;
  // Add other props as needed
}
const CreateVendorModal: React.FC<ModalProps> = ({ open, onClose, modalStyleLg }) => {
  return (
  <Modal open={open} onClose={onClose}
        keepMounted
      //  open={open}
      //  onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={modalStyleLg}>
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
