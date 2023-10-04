import { configureStore } from '@reduxjs/toolkit'
import testsReducer from './redux/testsSlice'

export const store = configureStore({
  reducer: {
    tests: testsReducer
  },
})