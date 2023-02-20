
import React from 'react'
import nbaLogo from "../assets/nba-logo.png"


const Header = () => {
  return (
    <div className='container'>
    <div className='flex justify-center my-5 '>
      <img src={nbaLogo} alt="nba-logo" />
      </div>
      <h1 className='flex justify-center my-3 text-4xl' >Nba Legends</h1>

    </div>
  )
}

export default Header
