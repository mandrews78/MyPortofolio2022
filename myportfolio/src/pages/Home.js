import React from 'react'
import ProjectItem from '../components/ProjectItem'
import myPhoto from '../images/myphoto.jpg'
import '../styles/Home.css'
function Home() {
  return (
    <div className='Home'>
      
      <ProjectItem name='myphoto.jpg' image={myPhoto} />
      <h2>Michael Andrews</h2>
    </div>
  )
}

export default Home