import React from 'react'
import ProjectItem from '../components/ProjectItem'
import pwGenerator from '../images/pwGenerator.png'
import NoteTaker from '../images/NoteTaker.png'
import testEditorPWA from '../images/testEditorPWA.png'
import WorkDayScheduler from '../images/WorkDayScheduler.png'
// import pwGenerator from '../images/pwGenerator.png'
// import pwGenerator from '../images/pwGenerator.png'
import '../styles/Projects.css'


function projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        
      <ProjectItem name="Password Generator" image={pwGenerator}/>
      
      <ProjectItem name='Work Day Scheduler' image={WorkDayScheduler} />
      
      <ProjectItem name='Note Taker' image={NoteTaker}/>
      
      <ProjectItem name='Text Editor PWA' image={testEditorPWA} />
        

      </div>
    </div>
  )
}

export default projects