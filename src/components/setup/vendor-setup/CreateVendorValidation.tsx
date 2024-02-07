import * as Yup from 'yup';
export const CreateVendorValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  vendorType: Yup.number().required("Vendor Type is required"),
  // menuItem: Yup.number().required("Vendor Type is required"),
});