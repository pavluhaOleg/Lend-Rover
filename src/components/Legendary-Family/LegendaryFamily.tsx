import React, { FC, useState } from 'react'
import Title from '../../reuseComponents/Title/Title'
import legend from './LegendaryFamily.module.css'

import img_1 from '../../img/family-1.png'
import img_2 from '../../img/family-2.png'
import img_3 from '../../img/family-3.png'
import ItemElemFamily from './ItemElemFamily/ItemElemFamily'


interface ILegendaryFamily {
  id: number,
  img: string,
  text: string,
  anchor: string | number,
  title: string,
}

const LegendaryFamily: FC<{}> = () => {

  const [elemFamily, setElemFamily] = useState<ILegendaryFamily[]>([
    { id: 1, img: img_1, title: 'СЕМЕЙСТВО RANGE ROVER', text: 'Исключительное изящество', anchor: 1 },
    { id: 2, img: img_2, title: 'СЕМЕЙСТВО DISCOVERY', text: 'Универсальность при любых условиях', anchor: 2 },
    { id: 3, img: img_3, title: 'СЕМЕЙСТВО DEFENDER', text: 'Решительность и выносливость', anchor: 3 },
  ])
  
  return (
    <div className={legend.wrapper}>
      <Title text="ЛЕГЕНДАРНОЕ СЕМЕЙСТВО" />

      <ul className={legend.blockCard}>
        {elemFamily.map(elem => 
            <ItemElemFamily children={undefined} key={elem.id} {...elem} />
        )}
      </ul>
    </div>
  )
}

export default LegendaryFamily