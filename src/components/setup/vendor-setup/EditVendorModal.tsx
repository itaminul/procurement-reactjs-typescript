// ModalComponent.tsx
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Alert, Box, Button, Grid, MenuItem, Select, Snackbar, TextField, Typography } from "@mui/material";
import { VendorDataItems } from "./VendorDataTypes";
import { useFormik } from "formik";
import { CreateVendorValidation } from "./CreateVendorValidation";
import { useGetVendorCountrySetupDataQuery } from "../../../redux/services/vendorCountrySetupAPI";
import { useGetVendorInformationByIdQuery } from "../../../redux/services/vendoerSetupAPI";

const initialValues = {
  vendorName: null,
  vendorType: null,
  vendorCountryType: null,
  vendorCountry: null,
  vendorOfficeName: "",
  vendorOfficeLocation: "",
  vendoerPhone: ""
};
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  selectedRowId: number;
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

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const { data: vendorCountry } = useGetVendorCountrySetupDataQuery();  
  const { data: vendorInfoById } = useGetVendorInformationByIdQuery(selectedRowId);
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

  const { values, handleBlur, handleChange, handleSubmit, errors } =
    useFormik<VendorDataItems>({
      initialValues: initialValues,
      validationSchema: CreateVendorValidation,
      onSubmit: (values: any) => {
        console.log("values", values);
      },
    });
console.log("vendorInfoById", vendorInfoById);
  
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
                  name="vendorName"
                  id="vendorName"
                  fullWidth
                  // label="Vendor Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={vendorInfoById?.vendorName}
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
                  // label="Vendor Description"
                  variant="outlined"
                  value={vendorInfoById?.vendoerDescription}
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
                  value={vendorInfoById?.vendorType}
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
                  value={vendorInfoById?.vendorCountryType}
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
                  value={vendorInfoById?.vendorCountry}
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
                  // label="Vendor Office Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={vendorInfoById?.vendorOfficeName}
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
                  // label="Vendor Office Location"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={vendorInfoById?.vendorOfficeLocation}
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
                  // label="Vendor Phone"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={vendorInfoById?.vendoerPhone}
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
                  value={vendorInfoById?.orgId}
                >                
                  <MenuItem value={1}>Abc</MenuItem>
                 
                </Select>
                
                </Grid>
            </Grid>

            <Snackbar
            open={showSuccessMessage}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert severity="success">
              Data inserted successfully!
            </Alert>
          </Snackbar>

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
