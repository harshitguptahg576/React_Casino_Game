import React from 'react'
import H_Coder from '../public/Images/H-Coder white.png'

const Header = () => {
  return (
      <nav>
        <div className='logo bg-black text-white text-center fs-2 p-2'>
          <img src={H_Coder} width={"250"}  alt='H-Coder'/>
        </div>
      </nav>
  )
}

export default Header

