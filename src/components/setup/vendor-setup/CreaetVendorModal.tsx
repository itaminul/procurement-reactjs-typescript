import Modal from "@mui/material/Modal";
import { Autocomplete, Box, Button, Grid, TextField, Select, MenuItem } from "@mui/material";
import { useFormik } from 'formik';
import { VendorDataItems } from "./VendorDataTypes";
import { CreateVendorValidation } from "./CreateVendorValidation";
import { useGetVendoerSetupQuery } from "../../../redux/services/vendoerSetupAPI"; 
import { number, string } from "yup";
import { useGetVendorCountrySetupDataQuery } from "../../../redux/services/vendorCountrySetupAPI";
interface ModalProps {
  open: boolean;
  onClose: () => void
}
const initialValues = {
  name: "",
  id: 0,
  vendorType: null,
  vendorCountryType: null,
  vendorCountry: null,
  officeName: "",
  vendorOfficeName: "",
  vendorOfficeLocation: "",
  vendoerPhone: ""
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
  const { data } = useGetVendoerSetupQuery();
  const { data: vendorCountry } = useGetVendorCountrySetupDataQuery();
  console.log("get data vendorCountry", vendorCountry);
  const { values, handleBlur, handleChange, handleSubmit, errors } =
    useFormik<VendorDataItems>({
      initialValues:initialValues,
      validationSchema: CreateVendorValidation,
      onSubmit: (values: any) => {
        console.log("values", values);
      },
    });
  return (
    <>
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
                  {vendorCountry?.map((vendorCountr) => (
                    <MenuItem value={1}>{vendorCountr.countryName}</MenuItem>
                  ))}
                </Select>
                {Touch.name && errors.vendorType && (
                  <div className="validation-message-color">
                    {errors.vendorType}
                  </div>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <Select
                  id="vendorCountryType"
                  name="vendorCountryType"
                  sx={{
                    marginTop: 1,
                    width: 318,
                    height: 55,
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendorCountryType}
                >
                  {vendorCountry?.map((vendorCountr) => (
                    <MenuItem value={1}>{vendorCountr.countryName}</MenuItem>
                  ))}
                </Select>
                {Touch.name && errors.vendorCountryType && (
                  <div className="validation-message-color">
                    {errors.vendorCountryType}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  id="vendorCountry"
                  name="vendorCountry"
                  sx={{
                    marginTop: 1,
                    width: 318,
                    height: 55,
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendorCountry}
                >
                  {vendorCountry?.map((vendorCountr) => (
                    <MenuItem value={1}>{vendorCountr.countryName}</MenuItem>
                  ))}
                </Select>
                {Touch.name && errors.vendorCountry && (
                  <div className="validation-message-color">
                    {errors.vendorCountry}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="vendorOfficeName"
                  id="vendorOfficeName"
                  fullWidth
                  label="Vendor Office Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendorOfficeName}
                />
                {Touch.name && errors.vendorOfficeName && (
                  <div className="validation-message-color">
                    {errors.vendorOfficeName}
                  </div>
                )}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendorOfficeLocation}
                />
                {Touch.name && errors.vendorOfficeLocation && (
                  <div className="validation-message-color">
                    {errors.vendorOfficeLocation}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="vendoerPhone"
                  id="vendoerPhone"
                  fullWidth
                  label="Vendor Phone"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendoerPhone}
                />
                {Touch.name && errors.vendoerPhone && (
                  <div className="validation-message-color">
                    {errors.vendoerPhone}
                  </div>
                )}
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
    </>
  );
};

export default CreateVendorModal;
