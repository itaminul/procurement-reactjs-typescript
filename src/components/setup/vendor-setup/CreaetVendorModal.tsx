// ModalComponent.tsx
import React from "react";
import Modal from "@mui/material/Modal";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  // Add other props as needed
}

const ModalComponent: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        {/* Add your modal content here */}
        <h2>Modal Content</h2>
        <p>This is a simple modal.</p>
      </div>
    </Modal>
  );
};

export default ModalComponent;
