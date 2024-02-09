import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VendorDataItems } from "../../components/setup/vendor-setup/VendorDataTypes";
// const BASE_URL = `${process.env.BACKEND_URL}`
const BASE_URL = `${process.env.VITE_API_BASE_URL}`;
console.log("base url", BASE_URL);
export const vendorSetupAPI = createApi({
  reducerPath: "vendorSetupAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getVendoerSetup: builder.query<VendorDataItems[], void>({
      query: () => "vendorsetup",
      transformResponse: (response: any) => {
        console.log("response", response);
        const formatedData = response.results?.map((item: any) => ({
          id: item.id,
          vendorName: item.vendorName,
          vendorDescription: item.vendorDescription
        }));
        return formatedData;;
      }     
    }),    
  }),
});

export const { useGetVendoerSetupQuery } = vendorSetupAPI;