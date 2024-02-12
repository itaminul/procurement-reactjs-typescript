// ModalComponent.tsx
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { VendorDataItems } from "./VendorDataTypes";
import { useFormik } from "formik";
import { CreateVendorValidation } from "./CreateVendorValidation";
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
  selectedRowId
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const [selectedRow, setSelectedRow] = useState<User | any>(null);
  const [fetchValue, setFetchValue] = useState<any>(null);

  // Simulate fetching data based on the selectedRowId
  useEffect(() => {
    // Fetch data based on selectedRowId
    const fetchData = async () => {
      // Simulated API call
      const response = await fetch(`/data.json`);
      const data = await response.json();

  console.log("data", data);
      setSelectedRow(data);
      setUsers(data);
    };

    if (selectedRowId !== null) {
      fetchData();
    }
  }, [selectedRowId]);

  const fetchUserById = (selectedRowId: number) => {
    const userd = users.find(user => user.id === selectedRowId);
    setFetchValue(userd);
   
  }
  console.log("Save fetchValue : users", selectedRowId);
  const { values, handleBlur, handleChange, handleSubmit, errors } =
    useFormik<VendorDataItems>({
      initialValues: setFetchValue,
      validationSchema: CreateVendorValidation,
      onSubmit: (values: any) => {
        console.log("values", values);
      },
    });

  
  return (
    <Modal
      open={open}
      onClose={onClose}
      keepMounted
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
          }}
          className="modal-size-md"
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="name"
                id="name"
                fullWidth
                label="Last Name"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
              //  value={setFetchValue.name}
              />
              {Touch.name && errors.name && (
                <div className="validation-message-color">{errors.name}</div>
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="secondname"
                id="secondname"
                fullWidth
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
          </Grid>

          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
export default EditVendorModal;
