import React,{ FC} from 'react'
import cn from './Cnp.module.css'
import { BsArrowRightSquare } from "react-icons/bs";

interface ICnp {
textCnp: string
}

const Cnp: FC<ICnp>= ({ textCnp }) => {
  return (
    <div className={cn.cnp}><BsArrowRightSquare /><span>{textCnp}</span></div>
  )
}

export default Cnp