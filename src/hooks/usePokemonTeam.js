import { useDispatch, useSelector } from 'react-redux'
import { addPokemon, editTeam } from '../state/teamSlice'
import { useToast } from './useToast'

export function usePokemonTeam () {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemon.pokemonSelected)
  const pokemonTeam = useSelector((state) => state.team.pokemonTeam)

  const { newToast } = useToast()

  const addPokemonToTeam = () => {
    const validatePokemon = pokemonTeam.find(pokemonValidated => pokemonValidated.id === parseInt(pokemon.id))

    if (!validatePokemon) {
      if (pokemonTeam.length < 6) {
        dispatch(addPokemon(pokemon))
        newToast({
          message: `${pokemon.name} added to your team`,
          color: '#58c69e'
        })
      } else {
        newToast({
          message: 'Your Pokemon team is full',
          color: '#f57373'
        })
      }
    } else {
      newToast({
        message: `${pokemon.name} already exists in your team`,
        color: '#f57373'
      })
    }
  }
  const sortTeam = ({ newTeam }) => {
    dispatch(editTeam({ newTeam }))
  }
  const deleteTeam = () => {
    const newTeam = []
    dispatch(editTeam({ newTeam }))
    newToast({
      message: 'Pokemon team have been deleted',
      color: '#f57373'
    })
  }
  const deletePokemon = (id, name) => {
    const newTeam = pokemonTeam.filter((pokemon) => pokemon.id !== id)
    dispatch(editTeam({ newTeam }))
    newToast({
      message: `${name} was deleted from your team`,
      color: '#f57373'
    })
  }
  return { addPokemonToTeam, sortTeam, deleteTeam, deletePokemon }
}
