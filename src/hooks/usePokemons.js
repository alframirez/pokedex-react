import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPokemonMovesDetails, getPokemonSpeciesDetails } from '../services/pokemon'
import { addMovesToPokemon, addSpeciesToPokemon, savePokemonSelected } from '../state/pokemonSlice'

export function usePokemons () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemon.pokemonsList)
  const [pokemonDetail, setPokemonDetail] = useState(null)

  useEffect(() => {
    findPokemonDetails()
  }, [id, pokemons])

  const findPokemonDetails = () => {
    const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id))
    setPokemonDetail(pokemon)
  }

  const getPokemonSelect = () => {
    dispatch(savePokemonSelected({ pokemonDetail }))
  }

  const getPokemonSpecies = () => {
    getPokemonSpeciesDetails(id).then((species) => dispatch(addSpeciesToPokemon({ species })))
  }

  const getPokemonMoves = () => {
    const pokemonSelected = pokemons.find(pokemon => pokemon.id === parseInt(id))
    getPokemonMovesDetails(pokemonSelected.moves).then((moves) => {
      dispatch(addMovesToPokemon({ moves }))
    })
  }

  return { pokemonDetail, getPokemonSelect, getPokemonSpecies, getPokemonMoves }
}
