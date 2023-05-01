import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobUserApi = createApi({
  reducerPath: 'jobUserApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}/user/job`
  }),
  tagTypes: ["Jobs"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "/list",
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ["Jobs"]
    }),
    getJobById: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ["Jobs"]
    }),
  }),
})

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useCreateJobMutation
} = jobUserApi