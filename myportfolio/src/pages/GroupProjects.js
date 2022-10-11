import React from 'react'
import ProjectItem from '../components/ProjectItem'
import EventFinder from '../images/EventFinderProject2.png'
import RealEstate from '../images/realEstateProject.png'
import '../styles/Projects.css'

function GroupProjects() {
  return (
    <div className='projects'>
      <h1>Group Projects</h1>
      <div className='projectList'>
      <ProjectItem name="Event Finder" image={EventFinder} />
      <ProjectItem name='Top 5 Real Estate' image={RealEstate} />
      </div>
    </div>

  )
}

export default GroupProjects