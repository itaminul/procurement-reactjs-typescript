import Modal from "@mui/material/Modal";
import { Box, Button, Grid, TextField, Select, MenuItem } from "@mui/material";
import { ErrorMessage, useFormik } from 'formik';
import { VendorDataItems } from "./VendorDataTypes";
import { CreateVendorValidation } from "./CreateVendorValidation";
import { useCreateVendorSetupMutation, useGetVendoerSetupQuery } from "../../../redux/services/vendoerSetupAPI"; 
import { useGetVendorCountrySetupDataQuery } from "../../../redux/services/vendorCountrySetupAPI";
import { useState } from "react";
interface ModalProps {
  open: boolean;
  onClose: () => void
}
const initialValues = {
  vendorName: null,
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

const CreateVendorModal = ({ open, onClose }: ModalProps) => {
    const [successOpen, setSuccessOpen] = useState(false);
  const { data } = useGetVendoerSetupQuery();
  const { data: vendorCountry } = useGetVendorCountrySetupDataQuery();
  const [ saveVendor ] = useCreateVendorSetupMutation();
  console.log("get data vendorCountry", vendorCountry);
  const { values, handleBlur, handleChange, handleSubmit, errors } =
    useFormik<VendorDataItems>({
      initialValues:initialValues,
      validationSchema: CreateVendorValidation,
      onSubmit: async(values: VendorDataItems) => {
       try {
         const fomateData = {
           vendorName: values.vendorName,
           vendoerDescription: values.vendoerDescription,
           vendorType: values.vendorType,
           vendorCountryType: values.vendorCountryType,
           vendorCountry: values.vendorCountry,
           vendorOfficeName: values.vendorOfficeName,
           vendorOfficeLocation: values.vendorOfficeLocation,
           orgId: Number(values.orgId),
         };
         await saveVendor(fomateData);
         setSuccessOpen(true);
         console.log("values", values);
       } catch (error) {
        console.log("error", ErrorMessage)
       }
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
                  name="vendorName"
                  id="vendorName"
                  fullWidth
                  label="Vendor Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vendorName}
                />
                {Touch.name && errors.vendorName && (
                  <div className="validation-message-color">
                    {errors.vendorName}
                  </div>
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
                <Select
                  id="orgId"
                  name="orgId"
                  sx={{
                    marginTop: 1,
                    width: 318,
                    height: 55,
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.orgId}
                >                
                  <MenuItem value={1}>Abc</MenuItem>
                 
                </Select>
                
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
