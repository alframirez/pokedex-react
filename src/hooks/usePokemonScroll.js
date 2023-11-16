import { useState } from 'react'
import { getPokemons } from '../services/pokemon'
import { useDispatch } from 'react-redux'
import { addPokemon } from '../state/pokemonSlice'

export function usePokemonScroll () {
  const dispatch = useDispatch()
  const [offset, setOffset] = useState(0)

  const handleScroll = (event) => {
    const scrollHeight = event.target.documentElement.scrollHeight
    const currentHeight = event.target.documentElement.scrollTop + window.innerHeight
    if (currentHeight + 1 >= scrollHeight) {
      const newOffset = offset + 20
      setOffset(newOffset)
      getPokemons(newOffset).then((pokemons) => dispatch(addPokemon(pokemons)))
    }
  }
  return { offset, handleScroll }
}
