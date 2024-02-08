import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VendorDataItems } from "../../components/setup/vendor-setup/VendorDataTypes";
// const BASE_URL = `${process.env.BACKEND_URL}`
const BASE_URL = `${process.env.BACKEND_UTL}`
export const vendorSetupAPI = createApi({
  reducerPath: "vendorSetupAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getVendoerSetup: builder.query<VendorDataItems[], void>({
      query: () => "vendorsetup",
      transformResponse: (response: any) => {
        const formatedData = response.results?.map((item: any) => {
          id: item.id;
          vendoerName: item.vendoerName;
          vendoerDescription: item.vendoerDescription;
        })
        return formatedData;
      }     
    }),    
  }),
});

export const { useGetVendoerSetupQuery } = vendorSetupAPI;