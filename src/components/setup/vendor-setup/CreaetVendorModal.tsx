// ModalComponent.tsx
import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Grid, TextField } from "@mui/material";
import '../../../styles/modalStyles.scss'
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from 'formik'
interface ModalProps {
  open: boolean;
  onClose: () => void
}
const CreateVendorModal: React.FC<ModalProps> = ({ open, onClose}) => {
  const initialValues = {
    name: ''
  }
  const onSubmit = (values: any) => {

  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      keepMounted
      //  open={open}
      //  onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Formik
      initialValues={initialValues}
      validationSchema={validateYupSchema}
      onSubmit={onSubmit}
      >
        <Form>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "55ch" },
            }}
            className="modal-size-lg"
          >
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
            <Button onClick={onClose}>Create</Button>
          </Box>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CreateVendorModal;
