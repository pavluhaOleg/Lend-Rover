import React, { useState } from 'react'
import tch from './TransmissionCheckbox.module.css'

const TransmissionCheckbox = () => {
  const [arrTransmission] = useState<string[]>(['Любая','Механическая','Автоматическая'])

  return (
    <div className={tch.wrapper}>
      <h3 className={tch.title}>вид топлива</h3>
      <ul>{
        arrTransmission.map((elem, index) =>
          <label key={index} className={tch.labelText}>
            <input type="checkbox" className={tch.check} />
            <span>{elem}</span>
          </label>
        )
      }
      </ul>

    </div>
  )
}

export default TransmissionCheckbox