import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/auth'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { jobCategoryApi } from './apis/admin/job-categories'
import { jobTypeApi } from './apis/admin/job-types'
import { jobApi as jobAdminApi } from './apis/admin/job'
import { jobApi as jobUserApi } from './apis/user/job'
import { jobApplicationApi as jobAdminApplicationApi } from './apis/admin/job-application'
import { jobApplicationApi as jobUserApplicationApi } from './apis/user/job-application'


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [jobCategoryApi.reducerPath]: jobCategoryApi.reducer,
    [jobTypeApi.reducerPath]: jobTypeApi.reducer,
    [jobAdminApi.reducerPath]: jobAdminApi.reducer,
    [jobUserApi.reducerPath]: jobUserApi.reducer,
    [jobAdminApplicationApi.reducerPath]: jobAdminApplicationApi.reducer,
    [jobUserApplicationApi.reducerPath]: jobUserApplicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
                                                              .concat(jobCategoryApi.middleware)
                                                              .concat(jobTypeApi.middleware)
                                                              .concat(jobAdminApi.middleware)
                                                              .concat(jobUserApi.middleware)
                                                              .concat(jobUserApplicationApi.middleware)
                                                              .concat(jobAdminApplicationApi.middleware),
  devTools: process.env.REACT_APP_DEV_TOOLS 
})

setupListeners(store.dispatch)