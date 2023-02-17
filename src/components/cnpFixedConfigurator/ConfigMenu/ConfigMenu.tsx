import React, { FC, useState } from 'react'
import cm from './ConfigMenu.module.css'
import ItemConfigMenu from './ItemConfigMenu/ItemConfigMenu'
import { Transition } from 'react-transition-group';


interface IConfigMenu {
  toggle: boolean,
}

interface IarrMenu {
  id: number,
  text: string,
  icon: string
}

const ConfigMenu: FC<IConfigMenu> = ({ toggle }) => {
  const [menu, setMenu] = useState<IarrMenu[]>([
    { id: 1, text: 'КОНФИГУРАТОР', icon: "fa fa-car" },
    { id: 2, text: 'СРАВНИТЕ НАШИ АВТОМОБИЛИ', icon: "fa fa-braille" },
    { id: 3, text: 'СКАЧАТЬ БРОШЮРУ', icon: "fa fa-picture-o" }
  ])

  return (
    <Transition
      in={toggle}
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      <div className={toggle ? cm.block : cm.none}>
        <ul>{menu.map(elem =>
          <ItemConfigMenu key={elem.id} {...elem} />
        )
        }</ul>
      </div>
    </Transition>
  )
}

export default ConfigMenu