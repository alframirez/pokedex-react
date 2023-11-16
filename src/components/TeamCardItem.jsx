import { useSortable } from '@dnd-kit/sortable'
import { ProgressBar } from './ProgressBar'
import { CSS } from '@dnd-kit/utilities'

export function TeamCardItem ({ pokemon }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: pokemon.id
  })
  const style = {
    backgroundColor: pokemon.color,
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div className='team-item' style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div className='team-pokemon'>
        <img className='pokemon' src={pokemon.sprites.other['official-artwork'].front_default} alt='pokemon-default-image' />
        <h2>{pokemon.name}</h2>
      </div>
      <div className='team-pokemon'>

        <div className='team-hp'>
          <h3>{pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat} / {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</h3>
          <ProgressBar stat={255} color='green' />
        </div>
        <div className='types-list'>
          {pokemon.types.map(type => (
            <h4 key={type.slot} style={{ backgroundColor: type.type.color !== pokemon.color ? type.type.color : 'rgb(255, 255, 255, 0.3)' }}> {type.type.name} </h4>
          ))}
        </div>
      </div>
    </div>
  )
}
