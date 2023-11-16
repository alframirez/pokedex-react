import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Navbar } from './components/Navbar'
import { useEffect } from 'react'
import { initPokemons } from './state/pokemonSlice'
import { getPokemons } from './services/pokemon'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonDetails } from './pages/PokemonDetails'
import { PokemonTeam } from './pages/PokemonTeam'
import { usePokemonScroll } from './hooks/usePokemonScroll'
import { Toast } from './components/Toast'
import { useToast } from './hooks/useToast'
import { Home } from './pages/Home'

function App () {
  const dispatch = useDispatch()
  const { offset, handleScroll } = usePokemonScroll()
  const { activeToast, status } = useSelector((state) => state.toast)

  const { deleteOldToast } = useToast()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

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
          onClose={() => deleteOldToast()}
          color={activeToast.color}
        />
      </BrowserRouter>
    </>
  )
}

export default App
