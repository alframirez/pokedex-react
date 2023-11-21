import { useSelector } from 'react-redux'

export function PokemonAbout () {
  const pokemonDetail = useSelector((state) => state.pokemon.pokemonSelected)

  return (
    <div className='about-container'>
      <div className='about-item'>
        <h3 className='gray-text'>Height:</h3>
        <h3>{pokemonDetail.height / 10} (m)</h3>
      </div>

      <div className='about-item'>
        <h3 className='gray-text'>Weight:</h3>
        <h3>{pokemonDetail.weight / 10} (Kg)</h3>
      </div>

      <div className='about-item'>
        <h3 className='gray-text'>Abilities:</h3>
        <div className='ability-list'>

          {pokemonDetail.abilities.map(ability => (
            <h3 key={ability.ability.name}> {ability.ability.name}</h3>
          ))}
        </div>
      </div>

      <hr />
      <h2>Breeding</h2>
      {pokemonDetail.species.egg_groups && (
        <>
          <div className='about-item'>
            <h3 className='gray-text'>Egg Groups:</h3>

            <h3>{pokemonDetail.species.egg_groups.map(eggGroup => eggGroup.name).join(', ')}</h3>
          </div>

          <div className='about-item'>
            <h3 className='gray-text'>Egg Cycles</h3>
            <h3>{pokemonDetail.species.hatch_counter} ({(255 * pokemonDetail.species.hatch_counter) + 1} steps)</h3>
          </div>
        </>
      )}

    </div>
  )
}
