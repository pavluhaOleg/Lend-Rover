import  { FC, useState } from 'react'
import { ArrAutoNaw } from '../../Infa-arr/InfaArr'
import ItemMenuBlockAutoNow from './ItemMenuBlockAutoNow/ItemMenuBlockAutoNow'
import mban from './MenuBlockAutoNow.module.css'

type ArrMenuBlockAutoNowType = {
  id: number,
  text: string,
  link: string,
}
type HideBlockMenu = {
  hideBlockMenu: boolean,
  setHideBlockMenu: (hideBlockMenu: boolean) => void,
}

const MenuBlockAutoNow: FC<HideBlockMenu> = ({ hideBlockMenu, setHideBlockMenu }) => {
  const [arrMenu] = useState<ArrMenuBlockAutoNowType[]>(ArrAutoNaw)

  return (
    <div className={mban.blockMenu}>
      <ul className={hideBlockMenu ? `${mban.hide} ${mban.elem}` : mban.elem}>
        {arrMenu.map(item =>
          <ItemMenuBlockAutoNow key={item.id} {...item} hideBlockMenu={hideBlockMenu} setHideBlockMenu={setHideBlockMenu} />
        )}
      </ul>
    </div>
  )
}

export default MenuBlockAutoNow