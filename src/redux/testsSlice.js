import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test: {
    done: false
  },
}

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    updateTestResponses: (state, action) => {
      state.test = action.payload
    }
  },
})

export const { updateTestResponses } = testsSlice.actions

export default testsSlice.reducer
