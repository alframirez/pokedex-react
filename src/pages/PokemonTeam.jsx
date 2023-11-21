import { useSelector } from 'react-redux'
import { TeamCardItem } from '../components/TeamCardItem'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { usePokemonTeam } from '../hooks/usePokemonTeam'

export function PokemonTeam () {
  const { sortTeam, deleteTeam, deletePokemon } = usePokemonTeam()
  const pokemonTeam = useSelector((state) => state.team.pokemonTeam)

  const handleDragEnd = (event) => {
    const { active, over } = event
    const oldIndex = pokemonTeam.findIndex(person => person.id === active.id)
    const newIndex = pokemonTeam.findIndex(person => person.id === over.id)
    const newTeam = arrayMove(pokemonTeam, oldIndex, newIndex)
    sortTeam({ newTeam })
  }

  const handleDeletePokemon = (event, id, name) => {
    event.stopPropagation()
    deletePokemon(id, name)
  }
  return (
    <div className='team-container'>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

        {pokemonTeam.length === 0 && (
          <h1>Your team is empty!</h1>
        )}
        <SortableContext items={pokemonTeam} strategy={verticalListSortingStrategy}>

          {pokemonTeam.map(pokemon => (
            <div key={pokemon.id} className='team-item-container'>
              <TeamCardItem pokemon={pokemon} />
              <div onClick={(event) => handleDeletePokemon(event, pokemon.id, pokemon.name)} className='delete-pokemon' style={{ backgroundColor: pokemon.color }}>
                <img src='/trash.svg' alt='delete pokemon' />
              </div>

            </div>

          ))}

        </SortableContext>
        {pokemonTeam.length !== 0 && (
          <button onClick={() => deleteTeam()}> Delete Team</button>
        )}
      </DndContext>
    </div>
  )
}
