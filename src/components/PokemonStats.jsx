import { useSelector } from 'react-redux'
import { ProgressBar } from './ProgressBar'

export function PokemonStats () {
  const pokemonDetail = useSelector((state) => state.pokemon.pokemonSelected)

  return (
    <div className='stats-container'>
      {pokemonDetail.stats.map(stats => (
        <div key={stats.stat.name} className='stat'>
          <h3 className='gray-text'>{stats.stat.name}</h3>
          <h3>{stats.base_stat}</h3>
          <ProgressBar stat={stats.base_stat} color={pokemonDetail.color} />

        </div>
      ))}

    </div>
  )
}
