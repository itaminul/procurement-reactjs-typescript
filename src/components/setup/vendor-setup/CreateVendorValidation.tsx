import * as Yup from 'yup';
export const CreateVendorValidation = Yup.object().shape({
  vendorName: Yup.string()
    .required("Name is required")
    .min(5, "Minimum lenght of five ")
    .max(50, "Maximum length of fifty"),
  vendorType: Yup.number().required("Vendor Type is required"),
  vendorCountryType: Yup.string().required("Vendor Country Type is required"),
  vendorCountry: Yup.number().required("Vendor Country is required"),
  vendorOfficeName: Yup.string().required("Office name is required"),
  vendorOfficeLocation: Yup.string().required("Office name is required"),
  vendoerPhone: Yup.string().required("Office name is required"),
  orgId: Yup.string().required("Office name is required"),
});