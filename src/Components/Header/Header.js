import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Paloma Pies <span>🕊</span></h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact Us!
        </NavLink>
      </nav>
    </header>
  )
}

export default Header