import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/auth'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { jobCategoryApi } from './apis/job-categories'


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [jobCategoryApi.reducerPath]: jobCategoryApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
                                                              .concat(jobCategoryApi.middleware),
  devTools: process.env.REACT_APP_DEV_TOOLS 
})

setupListeners(store.dispatch)