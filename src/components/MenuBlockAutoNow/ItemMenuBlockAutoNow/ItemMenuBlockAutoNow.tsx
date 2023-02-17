import { NavLink } from 'react-router-dom'
import imban from './ItemMenuBlockAutoNow.module.css'

type ArrMenuBlockAutoNowTypeProps = {
  text: string,
  link: string,
  hideBlockMenu: boolean,
  setHideBlockMenu: (hideBlockMenu: boolean) => void,
}


const ItemMenuBlockAutoNow = ({ text, link, setHideBlockMenu, hideBlockMenu }: ArrMenuBlockAutoNowTypeProps) => {

  return (
    <li><NavLink to={link}
      className={({ isActive }) => isActive ? `${imban.active} ${imban.elem}` : `${imban.elem}`}

      onClick={() => setHideBlockMenu(!hideBlockMenu)}
    >{text}</NavLink></li>
  )
}

export default ItemMenuBlockAutoNow