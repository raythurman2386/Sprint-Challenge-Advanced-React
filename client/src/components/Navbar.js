import React from 'react'

import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, handleDarkMode] = useDarkMode()

  return (
    <nav data-testid="nav-test-id" className='navbar'>
      <h1>The Womens World Cup</h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={handleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default Navbar
