import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"

const Header = () => {
  return (
    <div className=' header w-full h-[70px] '>
      <ul className='flex gap-6'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">Find a Team</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default Header
