// features/products/productApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products', // fetches products from /products
    }),
    // searchProducts: builder.query({
    //   query: (searchTerm) => `products?name_like=${searchTerm}`, 
    //   // `name_like` works with json-server for partial matching
    // }),
  }),
});

export const { useGetProductsQuery, useSearchProductsQuery } = productApi;
