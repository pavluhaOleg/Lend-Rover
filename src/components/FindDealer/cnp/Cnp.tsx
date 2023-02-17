import React,{ FC} from 'react'
import cfd from './Cnp.module.css'
import { BsFillGeoAltFill } from "react-icons/bs";

interface ICnp {
textCnp: string
}

const Cnp: FC<ICnp>= ({ textCnp }) => {
  return (
    <div className={cfd.cnp}><BsFillGeoAltFill /><span>{textCnp}</span></div>
  )
}

export default Cnp