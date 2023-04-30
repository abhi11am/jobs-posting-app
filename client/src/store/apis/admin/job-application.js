import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobApplicationApi = createApi({
  reducerPath: 'jobApplicationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}/admin/job-application`
  }),
  tagTypes: ["JobApplications"],
  endpoints: (builder) => ({
    getJobApplications: builder.query({
      query: () => "/list",
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ["JobApplications"]
    }),
    getJobApplicationById: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ["JobApplications"]
    }),
    updateJobApplicationStatus: builder.mutation({
      query: ({ id, ...data}) => ({
        url: `/update-status/${id}`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["JobApplications"]
    }),
  }),
})

export const {
  useGetJobApplicationsQuery,
  useGetJobApplicationByIdQuery,
  useUpdateJobApplicationStatusMutation
} = jobApplicationApi