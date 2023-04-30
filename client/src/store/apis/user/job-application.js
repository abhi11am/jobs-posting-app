import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobApplicationApi = createApi({
  reducerPath: 'jobApplicationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}/user/job-application`,
  }),
  tagTypes: ["JobApplications"],
  endpoints: (builder) => ({
    // getJobApplications: builder.query({
    //   query: () => "/list",
    //   transformResponse: (response, meta, arg) => response.data,
    //   providesTags: ["JobApplications"]
    // }),
    submitJobApplication: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/submit/${id}`,
        method: "POST",
        body: formData
      }),
      invalidatesTags: ["JobApplications"]
    }),
  }),
})

export const {
  useSubmitJobApplicationMutation
} = jobApplicationApi