import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon/> 
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
        <p></p>
    </div>
  )
}
