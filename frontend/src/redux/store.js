import { configureStore } from '@reduxjs/toolkit'
import userslice from './UserSlice/userslice'
import formslice from './FormSlice/formslice'

export const store = configureStore({
  reducer: {
   user:userslice,
   form:formslice
  },
})
