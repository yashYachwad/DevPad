import React from 'react'
import { NavLink } from 'react-router-dom'
import './css.css'

const Navbar = () => {
  return (
    <div className='Nav-container'>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/pastes"> Pastes </NavLink>
      {/* <NavLink to="/pastes/viewpage"> View</NavLink> */}

    </div>
  )
}

export default Navbar
