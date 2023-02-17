import React, { FC } from 'react'
import cnpConfig from './Cnp_config.module.css'
import { FaCarSide } from "react-icons/fa";

interface ICnp_config {
  textCnp: string
}

const Cnp_config: FC<ICnp_config> = ({ textCnp }) => {
  return (
    <div className={cnpConfig.cnp}><FaCarSide /><span>{textCnp}</span></div>
  )
}

export default Cnp_config