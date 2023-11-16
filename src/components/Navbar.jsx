import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar () {
  const [isOverPokeball, setIsOverPokeball] = useState(false)
  const [isOverHome, setIsOverHome] = useState(false)
  return (
    <nav className='navbar'>

      <NavLink to='/' onMouseOver={() => setIsOverHome(true)} onMouseOut={() => setIsOverHome(false)} className='text home-text'>
        <img src='/home.svg' alt='home' className='home-icon' />
        {isOverHome && (
          <div className={isOverHome && 'home-text-hovered'}>
            Home
          </div>
        )}

      </NavLink>
      <h1>Pokedex</h1>
      <NavLink to='/team' onMouseOver={() => setIsOverPokeball(true)} onMouseOut={() => setIsOverPokeball(false)} className='text team-text'>
        {isOverPokeball && (
          <div className={isOverPokeball && 'team-text-hovered'}>
            Team
          </div>
        )}
        <img src='/poke.png' alt='team' className='pokeball-icon' />
      </NavLink>

    </nav>
  )
}
