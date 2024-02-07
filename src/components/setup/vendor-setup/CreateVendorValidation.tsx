import * as Yup from 'yup';
export const CreateVendorValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  vendorType: Yup.number().required("Vendor Type is required"),
  vendorType: Yup.string().required("Vendor Type is required"),
  vendorCountryType: Yup.string().required("Vendor Country Type is required"),  
  vendorCountry: Yup.number().required('Vendor Country is required'),
  vendorOfficeName: Yup.string().required('Office name is required'),
  vendorOfficeLocation: Yup.string().required('Office name is required'),
  vendoerPhone: Yup.string().required('Office name is required'),
});