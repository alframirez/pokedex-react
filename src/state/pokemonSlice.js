import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    paginationData: {},
    pokemonsList: [],
    infoToShow: 'About',
    pokemonSelected: null
  },
  reducers: {
    initPokemons: (state, action) => {
      const pokemonsResult = action.payload
      state.paginationData = pokemonsResult.paginationData
      state.pokemonsList = pokemonsResult.pokemonsList
    },
    changeInfoToShow: (state, action) => {
      const optionSelected = action.payload
      state.infoToShow = optionSelected
    },
    savePokemonSelected: (state, action) => {
      const pokemonDetail = action.payload
      state.pokemonSelected = pokemonDetail.pokemonDetail
    },
    addSpeciesToPokemon: (state, action) => {
      const pokemonSpecies = action.payload
      state.pokemonSelected.species = pokemonSpecies.species
    },
    addMovesToPokemon: (state, action) => {
      const pokemonMoves = action.payload
      state.pokemonSelected.moves = pokemonMoves.moves
    },
    addPokemon: (state, action) => {
      const pokemonsResult = action.payload
      state.paginationData = pokemonsResult.paginationData

      const newPokemons = pokemonsResult.pokemonsList.filter(newPokemon =>
        !state.pokemonsList.some(existingPokemon => existingPokemon.id === newPokemon.id)
      )
      state.pokemonsList = [...state.pokemonsList, ...newPokemons]
    }
  }
})

export const { initPokemons, addPokemon, changeInfoToShow, addSpeciesToPokemon, savePokemonSelected, addMovesToPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
