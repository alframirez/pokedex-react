import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function PokemonCardGroup () {
  const pokemons = useSelector((state) => state.pokemon.pokemonsList)

  const navigate = useNavigate()

  return (
    <div className='cards-container'>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className='card' style={{ backgroundColor: pokemon.color }} onClick={() => navigate(`/details/${pokemon.id}`)}>
          <div className='card-body'>
            <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <div className='types-list'>
              {pokemon.types.map(type => (
                <h4 key={type.slot} style={{ backgroundColor: type.type.color !== pokemon.color ? type.type.color : 'rgb(255, 255, 255, 0.3)' }}> {type.type.name} </h4>
              ))}
            </div>
          </div>

          <img className='pokemon' src={pokemon.sprites.other['official-artwork'].front_default} alt='pokemon-default-image' />
          <div className='pokeball' />
        </div>
      ))}

    </div>
  )
}
