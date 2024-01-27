import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VendorDataItems } from "../../components/setup/vendor-setup/VendorDataTypes";

export const vendorSetupApi = createApi({
  reducerPath: "vendorSetupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "aaa",
  }),
  endpoints: (builder) => ({
    getVendoerSetup: builder.query<VendorDataItems[], void>({
      query: () => "vendorSetup",
      // transformResponse: (response: any) => {

      // }
    }),
  }),
});

export const { useGetVendoerSetupQuery } = vendorSetupApi;