import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Navbar } from './components/Navbar'
import { useEffect } from 'react'
import { initPokemons } from './state/pokemonSlice'
import { getPokemons } from './services/pokemon'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonDetails } from './pages/PokemonDetails'
import { PokemonTeam } from './pages/PokemonTeam'
import { Toast } from './components/Toast'
import { useToast } from './hooks/useToast'
import { Home } from './pages/Home'

function App () {
  const dispatch = useDispatch()
  const { activeToast, status } = useSelector((state) => state.toast)
  const { deleteCurrentToast } = useToast()

  useEffect(() => {
    getPokemons().then((pokemons) => dispatch(initPokemons(pokemons)))
  }, [dispatch])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<PokemonDetails />} />
            <Route path='/team' element={<PokemonTeam />} />
          </Routes>
        </div>
        <Toast
          showToast={status}
          message={activeToast.message}
          onClose={() => deleteCurrentToast()}
          color={activeToast.color}
        />
      </BrowserRouter>
    </>
  )
}

export default App
