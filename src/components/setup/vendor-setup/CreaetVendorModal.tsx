import Modal from "@mui/material/Modal";
import { Autocomplete, Box, Button, Grid, TextField, Select, MenuItem } from "@mui/material";
import { useFormik } from 'formik';
import { VendorDataItems } from "./VendorDataTypes";
import { CreateVendorValidation } from "./CreateVendorValidation";
import FormControl from '@material-ui/core/FormControl';
import { useField } from "formik";
import { number, string } from "yup";

interface ModalProps {
  open: boolean;
  onClose: () => void
}
const initialValues = {
  name: "",
  id: 0,
  vendorType: 0
};

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];



const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
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
                label="Vendor Name"
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
                name="vendoerDescription"
                id="vendoerDescription"
                fullWidth
                label="Vendor Description"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Select
                id="vendorType"
                name="vendorType"
                sx={{
                  marginTop: 1,
                  width: 318,
                  height: 55,
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vendorType}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
              {Touch.name && errors.name && (
                <div className="validation-message-color">
                  {errors.name}
                </div>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Vendoer Country Type"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Vendoer Country"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="officeName"
                id="officeName"
                fullWidth
                label="Vendor Office Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="vendorOfficeLocation"
                id="vendorOfficeLocation"
                fullWidth
                label="Vendor Office Location"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="vendoerPhone"
                id="vendoerPhone"
                fullWidth
                label="Vendor Phone"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Organization"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
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
