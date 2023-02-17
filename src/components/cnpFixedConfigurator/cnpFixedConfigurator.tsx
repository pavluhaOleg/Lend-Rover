import React, { useState } from 'react'
import cnpConf from './cnpFixedConfigurator.module.css'
import ConfigMenu from './ConfigMenu/ConfigMenu'

const CnpFixedConfigurator = () => {
  const [toggle, setToggle] = useState(false);


  const toogleCnpFixed = () => {
    if (!toggle) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  return (
    <div>
      <div onClick={toogleCnpFixed} className={cnpConf.cnp}>
        <span className={toggle ? cnpConf.elem_cansel_1 : cnpConf.elem}></span>
        <span className={toggle ? '' : cnpConf.elem}></span>
        <span className={toggle ? cnpConf.elem_cansel_2 : cnpConf.elem}></span>
      </div>
      <ConfigMenu toggle={toggle} />
    </div>
  )
}

export default CnpFixedConfigurator