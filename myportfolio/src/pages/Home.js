import React from 'react'
import myPhoto from '../images/myphoto.jpg'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home'>
      <div className='card'>
      <img src={myPhoto} alt="myphoto" />
      </div>
      <h2>Michael Andrews</h2>
    </div>
  )
}

export default Home