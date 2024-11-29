import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base query with the base URL
const baseQuery = fetchBaseQuery({ baseUrl: "" });

// Create the API slice
export const apiSlice = createApi({
  reducerPath: "api", // Optional, specifies the slice name in the store
  baseQuery,
  tagTypes: ["User"], // Specify types for cache invalidation and tagging
  endpoints: (_) => ({}), // Define endpoints here
});

// You can export the apiSlice reducer if needed for store configuration
export const apiReducer = apiSlice.reducer;
