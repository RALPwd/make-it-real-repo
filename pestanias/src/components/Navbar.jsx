import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <>
        <ul className='NavBar'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/Pricing'>Pricing</NavLink>
            </li>
            <li>
                <NavLink to='/About'>About</NavLink>
            </li>
        </ul>
    </>
  )
}

export default Navbar