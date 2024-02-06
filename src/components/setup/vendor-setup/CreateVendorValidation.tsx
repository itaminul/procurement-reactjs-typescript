import * as Yup from 'yup';
export const CreateVendorValidation = Yup.object({
  name: Yup.string().required("Name is required"),
});