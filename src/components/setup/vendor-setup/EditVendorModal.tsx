import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Modal from "@mui/material/Modal";
import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { VendorDataItems } from "./VendorDataTypes";

import { CreateVendorValidation } from "./CreateVendorValidation";
import { useGetVendorCountrySetupDataQuery } from "../../../redux/services/vendorCountrySetupAPI";
import { useGetVendorInformationByIdQuery } from "../../../redux/services/vendoerSetupAPI";
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  selectedRowId: number;
  initialValues: VendorDataItems;
  onSubmit: (values: VendorDataItems) => void;
}

const EditVendorModal = ({
  open,
  onClose,
  selectedRowId,
  initialValues,
  onSubmit,
}: EditModalProps) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const { data: vendorCountry } = useGetVendorCountrySetupDataQuery();
  const { data: vendorInfoById } =
    useGetVendorInformationByIdQuery(selectedRowId);
  const [formData, setFormData] = useState<VendorDataItems>({
    id: 0,
    vendorName: "",
    vendoerDescription: "",
    vendorType: 0,
    vendorCountryType: 0,
    vendorCountry: 0,
    vendorOfficeName: "",
    vendorOfficeLocation: "",
    vendoerPhone: "",
    orgId: 0,
  });

  useEffect(() => {
    if (vendorInfoById) {
      setFormData(vendorInfoById);
    }
  }, [vendorInfoById]);

  const handleVendoerTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    console.log("name nnnn", value);
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name as any]: value,
    // }));

     setFormData({ ...formData, [name as any]: value });
    // handleChange(setFormData({ ...formData, [name as any]: value }));
  };
  const handleBlur = (
    event: React.FocusEvent<{ name?: any; value: unknown }>
  ) => {
    const { name, value } = event.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name as any]: value,
    // }));

    setFormData({ ...formData, [name as any]: value });
  };

  const { handleSubmit, errors, touched, values } = useFormik<VendorDataItems>({
    initialValues: {
      vendorName: formData.vendorName,
      vendoerDescription: "",
      vendorType: 0,
      vendorCountryType: 0,
      vendorCountry: 0,
      vendorOfficeName: "",
      vendorOfficeLocation: "",
      vendoerPhone: "",
      orgId: 0,
    },
    validationSchema: CreateVendorValidation,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

    console.log("formData data", formData);
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendorName || ""}
              />
              {touched.vendorName && errors.vendorName && (
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
                variant="outlined"
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendoerDescription || ""}
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendorType || ""}
              >
                {vendorCountry?.map((countryValue) => (
                  <MenuItem key={countryValue.id} value={countryValue.id}>
                    {countryValue.countryName}
                  </MenuItem>
                ))}
              </Select>
              {touched.vendorType && errors.vendorType && (
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendorCountryType || ""}
              >
                {vendorCountry?.map((vendorCountr) => (
                  <MenuItem key={vendorCountr.id} value={vendorCountr.id}>
                    {vendorCountr.countryName}
                  </MenuItem>
                ))}
              </Select>
              {touched.vendorCountryType && errors.vendorCountryType && (
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendorCountry || ""}
              >
                {vendorCountry?.map((vendorCountr) => (
                  <MenuItem key={vendorCountr.id} value={vendorCountr.id}>
                    {vendorCountr.countryName}
                  </MenuItem>
                ))}
              </Select>
              {touched.vendorCountry && errors.vendorCountry && (
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendorOfficeName || ""}
              />
              {touched.vendorOfficeName && errors.vendorOfficeName && (
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendorOfficeLocation || ""}
              />
              {touched.vendorOfficeLocation && errors.vendorOfficeLocation && (
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.vendoerPhone || ""}
              />
              {touched.vendoerPhone && errors.vendoerPhone && (
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
                onChange={handleVendoerTypeChange}
                onBlur={handleBlur}
                value={formData?.orgId || ""}
              >
                <MenuItem key={1} value={1}>
                  Abc
                </MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Snackbar
            open={showSuccessMessage}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="success">Data inserted successfully!</Alert>
          </Snackbar>

          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
export default EditVendorModal;
