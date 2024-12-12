import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://dummyjson.com/';

export const exampleApi = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  keepUnusedDataFor: 180,
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: () => 'products',
    }),

    getproductById: builder.query({
      query: (id) => `products/${id}`,
    }),

    // addNewProduct: builder.mutation({
    //   query: (newProduct) => ({
    //     url: `products/add`,
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: newProduct
    //   })
    // })

  })
})


export const {
   useGetAllProductsQuery,
   useGetproductByIdQuery,
   useAddNewProductMutation
} = exampleApi