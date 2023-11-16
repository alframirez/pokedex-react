import { createSlice } from '@reduxjs/toolkit'

export const teamSlice = createSlice({
  name: 'team',
  initialState: {
    pokemonTeam: []
  },
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload
      state.pokemonTeam.push(pokemon)
    },
    editTeam: (state, action) => {
      const { newTeam } = action.payload
      state.pokemonTeam = newTeam
    }
  }
})

export const { addPokemon, editTeam } = teamSlice.actions
export default teamSlice.reducer
