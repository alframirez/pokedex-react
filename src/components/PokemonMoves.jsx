import { useSelector } from 'react-redux'

export function PokemonMoves () {
  const pokemonDetail = useSelector((state) => state.pokemon.pokemonSelected)

  return (
    <div className='moves-container'>
      {pokemonDetail.moves && (

        pokemonDetail.moves.map((move, index) => (
          <div key={`${move.id}-${index}`} className='move-items' style={{ backgroundColor: move.color }}>
            <div className='move-item'>
              <h3>{move.name}</h3>
              <h3>PP: {move.pp} / {move.pp}</h3>
            </div>
            <div className='move-item'>
              {move.type && (
                <>
                  <h3>{move.type.name}</h3>
                  <h3>{move.damage_class.name}</h3>
                </>
              )}
            </div>
          </div>
        ))
      )}
      {!pokemonDetail.moves && (
        <h1>cargando</h1>
      )}

    </div>
  )
}
