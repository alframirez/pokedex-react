import { useDispatch, useSelector } from 'react-redux'
import { changeEmail } from '../state/pokemonSlice'

export function Email () {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemon)

  const handleChange = (e) => {
    const data = {
      id: Number(e.target.id),
      value: e.target.value
    }
    dispatch(changeEmail(data))
  }
  return (
    <>
      {pokemons.map((p) => (
        <div key={p.id}>
          <input id={p.id} type='email' value={p.email} placeholder='Email' onChange={handleChange} />
        </div>
      ))}
    </>

  )
}
