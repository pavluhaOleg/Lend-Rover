import React, { useState } from 'react'
import ItemFooterUl from '../ItemFooterUl/ItemFooterUl'
import bf from './BrandFooter.module.css'

export const BrandFooter = () => {

  const [arrBrand, setArrBrand] = useState(['НОВОСТИ', ' КАРЬЕРА', 'КОНТАКТЫ'])

  return (
    <ul className={bf.block}>
      <div className={bf.title}>БРЕНД LAND ROVER</div>
      {arrBrand.map(ul_2 =>
        <ItemFooterUl key={ul_2} elem={ul_2} />
      )}
    </ul>
  )
}
