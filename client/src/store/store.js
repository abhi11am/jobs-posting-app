import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/auth'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { jobCategoryApi } from './apis/job-categories'
import { jobTypeApi } from './apis/job-types'
import { jobApi } from './apis/job'


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [jobCategoryApi.reducerPath]: jobCategoryApi.reducer,
    [jobTypeApi.reducerPath]: jobTypeApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
                                                              .concat(jobCategoryApi.middleware)
                                                              .concat(jobTypeApi.middleware)
                                                              .concat(jobApi.middleware),
  devTools: process.env.REACT_APP_DEV_TOOLS 
})

setupListeners(store.dispatch)