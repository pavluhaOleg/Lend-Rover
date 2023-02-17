import React from 'react'
import { Link } from 'react-router-dom'
import l from './Logo.module.css'

const Logo = () => {
  return (
    <Link className={l.blokLogo} to='/'>
      <img src="https://dxnav.landrover.com/current/images/logo-landrover-7bd33da9d247934b2b4929d399ab8a42.png" alt='img' />
    </Link>
  )
}

export default Logo