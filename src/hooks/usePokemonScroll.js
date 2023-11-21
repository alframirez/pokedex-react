import { useState } from 'react'
import { getPokemons } from '../services/pokemon'
import { useDispatch } from 'react-redux'
import { addPokemon } from '../state/pokemonSlice'
import { useToast } from './useToast'

export function usePokemonScroll () {
  const dispatch = useDispatch()
  const { newToast, deleteCurrentToast } = useToast()
  const [offset, setOffset] = useState(0)

  const handleScroll = (event) => {
    const scrollHeight = event.target.documentElement.scrollHeight
    const currentHeight = event.target.documentElement.scrollTop + window.innerHeight
    if (currentHeight + 1 >= scrollHeight) {
      newToast({
        message: 'Adding new Pokemons',
        color: '#58c69e',
        defaultDelete: false
      })
      const newOffset = offset + 20
      setOffset(newOffset)
      getPokemons(newOffset).then((pokemons) => {
        dispatch(addPokemon(pokemons))

        setTimeout(() => {
          window.scrollBy({
            top: 100,
            left: 0,
            behavior: 'smooth'
          })
          deleteCurrentToast()
        }, 500)
      })
    }
  }
  return { offset, handleScroll }
}
