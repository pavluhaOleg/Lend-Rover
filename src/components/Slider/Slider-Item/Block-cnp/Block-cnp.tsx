import React, { FC, useState } from 'react'
import bk from './Block-cnp.module.css'
import Cnp from './cnp/Cnp'

interface IBlCn {
  title?: string,
  text?: string,
  marcerNum: number,
  id: number
}

const BloсkCnp: FC<IBlCn> = ({ text, marcerNum, title, id }) => {

  const [opacityShow] = useState(true)

  return (
    <div className={marcerNum === id
      &&
      opacityShow ? `${bk.active} ${bk.block}` : bk.block}>
      <h1>{title}</h1>
      <p>{text}</p>
      <Cnp textCnp="узнать больше" />
    </div>
  )
}

export default BloсkCnp