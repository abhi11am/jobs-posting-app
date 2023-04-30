import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobCategoryApi = createApi({
  reducerPath: 'jobCategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}/admin/category`
  }),
  tagTypes: ["JobCategory"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/list",
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ["JobCategory"]
    }), 
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["JobCategory"]
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["JobCategory"]
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["JobCategory"]
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = jobCategoryApi