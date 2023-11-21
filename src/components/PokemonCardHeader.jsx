import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { usePokemonTeam } from '../hooks/usePokemonTeam'

export function PokemonCardHeader () {
  const pokemonDetail = useSelector((state) => state.pokemon.pokemonSelected)
  const navigate = useNavigate()
  const { addPokemonToTeam } = usePokemonTeam()

  return (
    <>
      {
        pokemonDetail && (

          <div className='card' style={{ backgroundColor: pokemonDetail.color }}>
            <div className='options-header'>
              <i onClick={() => navigate('/')}>
                <img src='/arrow.svg' alt='go back' className='plus-icon' />

              </i>
              <i onClick={() => addPokemonToTeam()}>
                <img src='/plus.svg' alt='add pokemon to team' className='plus-icon' />
              </i>
            </div>

            <div className='card-body'>
              <div>
                <h1>{pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1)}</h1>
                <div className='types-list'>
                  {pokemonDetail.types.map(type => (
                    <h4 key={type.slot} style={{ backgroundColor: type.type.color !== pokemonDetail.color ? type.type.color : 'rgb(255, 255, 255, 0.3)' }}> {type.type.name} </h4>
                  ))}
                </div>
              </div>
              <h4>#{pokemonDetail.id}</h4>
            </div>

            <img className='pokemon' src={pokemonDetail.sprites.other['official-artwork'].front_default} alt='pokemon-default-image' />
            <div className='pokeball' />
          </div>
        )
    }
    </>

  )
}
