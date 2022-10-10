import React from 'react'

function ProjectItem({ image, name}) {
  return (
    <div className='projectItem'>
      <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
      <h1> {image} </h1>       
        
    </div>
  )
}

export default ProjectItem