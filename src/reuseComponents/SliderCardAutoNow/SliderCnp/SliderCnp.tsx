import React, { FC } from 'react'
import icnp from './SliderCnp.module.css'

interface SliderCnpType {
  clickSlider: (e: any) => void,
  cnp: number[],
  numCnp: string,
}

const SliderCnp: FC<SliderCnpType> = ({ clickSlider, cnp, numCnp }) => {


  return (
    <ul className={icnp.blockCnp}>
      {cnp.map((elem, index) =>
        <li key={index}
          onClick={(e) => clickSlider(e)}
          className={numCnp === String(index + 1) ? icnp.active : icnp.cnp}
        >{elem}</li>
      )

      }</ul>
  )
}

export default SliderCnp
