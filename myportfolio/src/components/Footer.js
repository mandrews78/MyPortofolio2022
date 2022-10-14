import React from 'react'
import '../styles/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://github.com/mandrews78" target="_blank"  rel="noreferrer"><GitHubIcon /></a>
            <a href="http://www.linkedin.com/in/mandrews191198" target="_blank" rel="opener"><LinkedInIcon /></a>
            <TwitterIcon />
        </div>
        <p> &copy; 2022 </p>
    </div>
  )
}

export default Footer