import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'


function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='headerIcon' />
      </IconButton>
      <img
        className='headerLogo'
        src='https://cdn.worldvectorlogo.com/logos/tinder-2.svg'
        alt='Tinder logo'
      />
      <IconButton>
        <ForumIcon fontSize='large' className='headerIcon'/>
      </IconButton>

    </div>
  )
}

export default Header