import { configureStore } from '@reduxjs/toolkit'
import gnb from './module/gnbSlice'

export default configureStore({
  reducer: { 
    gnb: gnb.reducer
  }
})