import { useDispatch } from 'react-redux'
import { changeInfoToShow } from '../state/pokemonSlice'

export function Selector () {
  const dispatch = useDispatch()

  const options = ['About', 'Base Stats', 'Moves']
  const handleSelector = (option) => {
    dispatch(changeInfoToShow(option))
  }
  return (
    <>
      <div className='selections'>
        {options.map(option => (
          <h3 key={option} onClick={() => handleSelector(option)}>{option}</h3>
        ))}
      </div>
    </>
  )
}
