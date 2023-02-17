import React, { FC, useState } from 'react'
import ItemFooterUl from '../ItemFooterUl/ItemFooterUl'
import info from './InformationFooter.module.css'

const InformationFooter: FC = () => {

  const [arrInformation, setArrInformation] = useState(['ПРИВЕТСТВЕННЫЙ КОМПЛЕКТ', ' INCONTROL', 'LAND ROVER СЕРВИС', 'ГАРАНТИЯ', 'ЗАПАСНЫЕ ЧАСТИ', 'ПРОГРАММА ПОМОЩИ НА ДОРОГАХ', 'ЧАСТЫЕ ВОПРОСЫ'])
  return (
    <ul className={info.block}>
      <div className={info.title}>ИНФОРМАЦИЯ ДЛЯ ВЛАДЕЛЬЦЕВ</div>
      {arrInformation.map(ul_2 =>
        <ItemFooterUl key={ul_2} elem={ul_2} />
      )}
    </ul>
  )
}

export default InformationFooter