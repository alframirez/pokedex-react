import { getPokemonBackgroundColor, getPokemonTypesColors } from '../utils/pokemonColorSelector'
import axios from './axios'

export const getPokemons = async (offset = 0) => {
  try {
    const response = await axios.get(`pokemon?offset=${offset}&limit=20`)
    const { count, next, previous, results: pokemons } = response.data

    const pokemonsList = await Promise.all(pokemons.map(async (pokemon) => {
      const response = await axios.get(pokemon.url)
      const { types, color } = getPokemonTypesColors(response.data.types)
      const pokemonData = { ...response.data }
      pokemonData.types = types
      pokemonData.color = color
      return pokemonData
    }))

    const pokemonsResult = {
      paginationData: {
        count,
        next,
        previous
      },
      pokemonsList
    }
    return pokemonsResult
  } catch (error) {
    console.error(error)
  }
}

export const getPokemonSpeciesDetails = async (pokemonId) => {
  try {
    const response = await axios.get(`/pokemon-species/${pokemonId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getPokemonMovesDetails = async (moves) => {
  try {
    const movesList = await Promise.all(moves.map(async (move) => {
      const response = await axios.get(`/move/${move.move.name}`)
      const moveResponse = { ...response.data }
      const moveColor = getPokemonBackgroundColor(moveResponse.type.name)
      moveResponse.color = moveColor
      return moveResponse
    }))
    return movesList
  } catch (error) {
    console.error(error)
  }
}
