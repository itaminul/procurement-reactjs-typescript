import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VendorCountryTypes } from "../../components/setup/vendor-country-setup/VendorDataTypes";

export const venodrCountrySetupAPI = createApi({
  reducerPath: "venodrCountrySetupAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081",
  }),
  endpoints: (builder) => ({
    getVendorCountrySetupData: builder.query<VendorCountryTypes[], void>({
      query: () => "vendor-country-setup",
      transformResponse: (response: any) => {
        const formatedData = response.results?.map((item: any) => ({
          id: item.id,
          countryName: item.countryName,
        }));
        return formatedData;
      },
    }),
  }),
});

export const { useGetVendorCountrySetupDataQuery } = venodrCountrySetupAPI;