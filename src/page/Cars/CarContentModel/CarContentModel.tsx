import React, { useEffect, useState } from 'react'
import cc from './CarContentModel.module.css'
import { arrMenuCarContent } from '../../../Infa-arr/InfaArr'

import { GrCatalog } from "react-icons/gr";

import ItemNavigation from '../../../reuseComponents/ItemNavigation/ItemNavigation'
import BlockWindow from './CarsBlockWindow/CarsBlockWindow';

interface ICarContentModelType {
  id: number,
  img: string,
  title: string,
  consumption?: string,
}

const CarContentModel = () => {
  const [familyRover, setFamilyRover] = useState<ICarContentModelType[]>(arrMenuCarContent)
  const [carActive, setCarActive] = useState(1)

  const hoverBlock = (id: number) => {
    if (id) {
      setCarActive(id)
    }
  }

  useEffect(() => {
    setFamilyRover(familyRover)
  }, [familyRover])

  return (
    <div className={cc.wrapper}>
      <div>
        <h4 className={cc.title}>СЕМЕЙСТВО RANGE ROVER</h4>
        <ul>
          {familyRover.map(elem =>
            <ItemNavigation key={elem.id} {...elem} hoverBlock={hoverBlock} />
          )}
        </ul>

        <div className={cc.cnp_comparison}>
          <span><GrCatalog /></span><h4>сравнение</h4>
        </div>
      </div>

      <BlockWindow carActive={carActive} />
    </div>

  )
}

export default CarContentModel