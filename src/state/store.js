import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonSlice'
import teamReducer from './teamSlice'
import toastReducer from './toastSlice'

export const store = configureStore({
  middleware: getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    pokemon: pokemonReducer,
    team: teamReducer,
    toast: toastReducer
  }
})
