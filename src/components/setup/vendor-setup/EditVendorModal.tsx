// ModalComponent.tsx
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, TextField, Typography } from "@mui/material";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  selectedRowId: number | null;
}

interface VendorTypes {
  id: number;
  name: string;
  // Add other fields as needed
}

const Row: VendorTypes[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  // Add other rows as needed
];

interface User {
  id: number;
  name: string;
}

const EditVendorModal: React.FC<EditModalProps> = ({
  open,
  onClose,
  selectedRowId,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const [selectedRow, setSelectedRow] = useState<User | any>(null);
  const [fetchValue, setFetchValue] = useState<User[] | any>(null);

  // Simulate fetching data based on the selectedRowId
  useEffect(() => {
    // Fetch data based on selectedRowId
    const fetchData = async () => {
      // Simulated API call
      const response = await fetch(
        `/data.json`
      );
      const data = await response.json();

  //console.log("data", data);
      setSelectedRow(data);
      setUsers(data);
    };

    if (selectedRowId !== null) {
      fetchData();
    }
  }, [selectedRowId]);

  const fetchUserById = (id: number) => {
    const userd = users.find(user => user.id === id);
    setFetchValue(userd);
   
  }
  console.log("Save fetchValue:", fetchValue);

  const handleSave = () => {
    // Handle saving the edited row data
    console.log("Save data:", selectedRow);
    onClose();
  };


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
           <TextField
              label="Name"
            //  value={selectedRow.name}
              // onChange={(e) =>
              //   setSelectedRow((prev: unknown) => ({ ...prev, name: e.target.value }))
              // }
            />
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={onClose}>Cancel</Button>
            
        </Box>
      </Modal>
  );
};
export default EditVendorModal;
