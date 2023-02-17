import React, { useEffect, useState } from 'react'
import { arrMenuCarContent, arrMenuDevelopment } from '../../../Infa-arr/InfaArr'

import { GrCatalog } from "react-icons/gr";

import ItemNavigation from '../../../reuseComponents/ItemNavigation/ItemNavigation'
import dev from './Development.module.css';
import DevelopmentBlockWindow from './DevelopmentblockWindow/DevelopmentBlockWindow';

interface IDevelopmentType {
  id: number,
  img: string,
  title: string,
  consumption?: string,
}

const Development = () => {
  const [familyRover, setFemilyRover] = useState<IDevelopmentType[]>(arrMenuDevelopment)
  const [carActive, setCarActive] = useState(1)

  const hoverBlock = (id: number) => {
    if (id) {
      setCarActive(id)
    }
  }
  useEffect(() => {
    setFemilyRover(familyRover)
  }, [familyRover])

  return (
    <div className={dev.wrapper}>
      <div>
        <h4 className={dev.title}>СЕМЕЙСТВО RANGE ROVER</h4>
        <ul>
          {familyRover.map(elem =>
            <ItemNavigation key={elem.id} {...elem} hoverBlock={hoverBlock} />
          )}
        </ul>

        <div className={dev.cnp_comparison}>
          <span><GrCatalog /></span><h4>сравнение</h4>
        </div>
      </div>

      <DevelopmentBlockWindow carActive={carActive} />
    </div>

  )
}

export default Development