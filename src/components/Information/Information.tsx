import React, { useState } from 'react'
import info from './Information.module.css'
import ItemInformation from './ItemInformation/ItemInformation'

const Information = () => {
  const [elemInformation, setElemInformation] = useState([
    { id: 1, title: 'ПОЛУЧИТЕ ОТВЕТЫ НА ВАШИ ВОПРОСЫ', text: 'обратная связь' },
    { id: 2, title: 'ПОЗНАКОМЬТЕСЬ С НОВОСТЯМИ LAND ROVER', text: 'новости' }
  ])
  return (
    <div className={info.wrapper}>
      <ul className={info.content}>
        {elemInformation.map(elem =>
          <ItemInformation key={elem.id} {...elem} />
        )}

      </ul>

    </div >
  )
}

export default Information