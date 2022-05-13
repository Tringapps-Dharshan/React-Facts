import React from 'react'
import logo from '../asserts/logo.png'
function Header() {
  return (
    <div className='header'>
        <img src={logo} alt='react-logo' className='header-logo'/>
        <h2 className='header-content'>React Facts</h2>
    </div>
  )
}

export default Header