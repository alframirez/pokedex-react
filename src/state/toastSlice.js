import { createSlice } from '@reduxjs/toolkit'

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    activeToast: {},
    status: false
  },
  reducers: {
    addToast: (state, action) => {
      const newToast = action.payload
      state.activeToast = newToast.toast
      state.status = true
    },
    deleteToast: (state, action) => {
      state.toast = {}
      state.status = false
    }
  }
})

export const { addToast, deleteToast } = toastSlice.actions
export default toastSlice.reducer
