import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { usePokemons } from '../hooks/usePokemons'
import { PokemonAbout } from './PokemonAbout'
import { PokemonStats } from './PokemonStats'
import { PokemonMoves } from './PokemonMoves'

export function PokemonCardInfo () {
  const dispatch = useDispatch()
  const optionSelected = useSelector((state) => state.pokemon.infoToShow)
  const { getPokemonSpecies, getPokemonMoves } = usePokemons()

  const options = {
    About: PokemonAbout,
    'Base Stats': PokemonStats,
    Moves: PokemonMoves
  }

  useEffect(() => {
    getPokemonSpecies()
    getPokemonMoves()
  }, [dispatch])

  return (
    <div className='info-container'>
      {optionSelected && options[optionSelected] && (
        React.createElement(options[optionSelected])
      )}
    </div>

  )
}
