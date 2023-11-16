import { useEffect } from 'react'
import { PokemonCardHeader } from '../components/PokemonCardHeader'
import { PokemonCardInfo } from '../components/PokemonCardInfo'
import { Selector } from '../components/Selector'
import { useDispatch, useSelector } from 'react-redux'
import { usePokemons } from '../hooks/usePokemons'

export function PokemonDetails () {
  const dispatch = useDispatch()
  const pokemonsFind = useSelector((state) => state.pokemon.pokemonSelected)
  const { pokemonDetail, getPokemonSelect } = usePokemons()

  useEffect(() => {
    getPokemonSelect()
  }, [dispatch, pokemonDetail])

  return (
    <>
      {pokemonsFind && (
        <div className='details-container'>
          <PokemonCardHeader />
          <div className='card info-card'>
            <Selector />
            <PokemonCardInfo />
          </div>
        </div>
      )}
    </>
  )
}
