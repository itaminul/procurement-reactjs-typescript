import Modal from "@mui/material/Modal";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from 'formik';
import { VendorDataItems } from "./VendorDataTypes";
import { CreateVendorValidation } from "./CreateVendorValidation";
interface ModalProps {
  open: boolean;
  onClose: () => void
}
const initialValues = {
  name: "",
  id: 0
};
const CreateVendorModal = ({ open, onClose }: ModalProps) => {
  const { values, handleBlur, handleChange, handleSubmit, errors } =
    useFormik<VendorDataItems>({
      initialValues:initialValues,

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
            "& .MuiTextField-root": { m: 1, width: "55ch" },
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
                value={values.name}
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

export default CreateVendorModal;
