import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ihhn from './ItemHomeHeaderNav.module.css'

type ItemHomeHeaderNavProps = {
  text: string,
  link: string,
  setShowSubtitle: (h: boolean) => void,
  setHideBlockMenu: (h: boolean) => void
}

const ItemHomeHeaderNav = ({ text, link, setShowSubtitle, setHideBlockMenu }: ItemHomeHeaderNavProps) => {

  useEffect(() => { 
    lift_Up() 
  },[link, text, setShowSubtitle, setHideBlockMenu])

  const lift_Up = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    if (link === '/car-stock') {
      setShowSubtitle(false)
    }
    else if (link !== '/car-stock') {
      setShowSubtitle(true)
      setHideBlockMenu(true)
    }
  }

  return (
    <li><NavLink to={link}
      className={({ isActive }) => isActive ? `${ihhn.active} ${ihhn.linkNav}` : `${ihhn.linkNav}`}
      onClick={lift_Up}
    >{text}</NavLink></li>
  )
}

export default ItemHomeHeaderNav