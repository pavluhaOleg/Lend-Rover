import React, { FC, useEffect, useState } from 'react'
import cc from './ElectricsContentModel.module.css'
import { arrMenuElectrics } from '../../../Infa-arr/InfaArr'

import { GrCatalog } from "react-icons/gr";

import ItemNavigation from '../../../reuseComponents/ItemNavigation/ItemNavigation'
import ElectricsBlockWindow from './ElectricsblockWindow/ElectricsBlockWindow';

interface IElectricsContentModelType {
  id: number,
  img: string,
  title: string,
  consumption?: string,
}

const ElectricsContentModel = () => {
  const [familyRover, setFamilyRover] = useState<IElectricsContentModelType[]>(arrMenuElectrics)
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
        <h4 className={cc.title}>PLUG-IN HYBRID (PHEV)</h4>
        <ul>
          {familyRover.map(elem =>
            <ItemNavigation key={elem.id} {...elem} hoverBlock={hoverBlock} />
          )}
        </ul>

        <div className={cc.cnp_comparison}>
          <span><GrCatalog /></span><h4>сравнение</h4>
        </div>
      </div>

      <ElectricsBlockWindow carActive={carActive} />
    </div>

  )
}

export default ElectricsContentModel