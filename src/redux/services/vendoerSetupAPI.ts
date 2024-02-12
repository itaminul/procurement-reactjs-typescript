import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VendorDataItems } from "../../components/setup/vendor-setup/VendorDataTypes";
// const BASE_URL = `${process.env.BACKEND_URL}`
const BASE_URL = `${process.env.VITE_API_URL}`;
console.log("show base url", BASE_URL);
export const vendorSetupAPI = createApi({
  reducerPath: "vendorSetupAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.84:8081",
  }),
  
  endpoints: (builder) => ({
    getVendoerSetup: builder.query<VendorDataItems[], void>({
      query: () => "vendorsetup",
      transformResponse: (response: any) => {
        console.log("response", response);
        const formatedData = response.results?.map((item: any) => ({
          id: item.id,
          vendorName: item.vendorName,
          vendoerDescription: item.vendoerDescription,
          vendorType: item.vendorType,
          vendorCountry: item.vendorCountry,
          vendorOfficeName: item.vendorOfficeName,
          vendorOfficeLocation: item.vendorOfficeLocation,
          vendoerPhone: item.vendoerPhone,
        }));
        return formatedData;
      },
    }),
    createVendorSetup: builder.mutation<
      VendorDataItems,
      Partial<VendorDataItems>
    >({
      query: (createVendor) => ({
        url: "vendorsetup",
        method: "POST",
        body: createVendor,
      }),
    }),
    updateVendorSetup: builder.mutation<void, {id: number; formData: VendorDataItems}>({
      query: (data) => ({
        url: `/vendorSetup/${data.id}`,
        method: 'PATCH',
        body: data
      })
    })
  }),
});

export const { 
  useGetVendoerSetupQuery, useCreateVendorSetupMutation, useUpdateVendorSetupMutation
 } = vendorSetupAPI;