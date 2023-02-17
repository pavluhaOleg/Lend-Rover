import React, { useState } from 'react'
import ItemFooterUl from '../ItemFooterUl/ItemFooterUl'
import ql from './QuickLinks.module.css'



const QuickLinks = () => {
  const [arrQuickLinks, setArrQuickLinks] = useState(['ПОДПИСКА НА НОВОСТИ', 'СКАЧАТЬ БРОШЮРУ', 'ЗАДАТЬ ВОПРОС', 'ГЛОССАРИЙ'])

  return (
    <ul className={ql.block}>
      <div className={ql.title}>БЫСТРЫЕ ССЫЛКИ</div>
      {arrQuickLinks.map(ul_1 =>
        <ItemFooterUl key={ul_1.length} elem={ul_1} />
      )}
    </ul>
  )
}

export default QuickLinks


