import React, { useState } from 'react'
import mchb from './ModelCheckbox.module.css'

const ModelCheckbox = () => {
  const [arrModel] = useState<string[]>(['Любая', 'Defender', 'Discvery Sport', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport', 'Range Rover Velar'])

  return (
    <div className={mchb.wrapper}>
      <h3 className={mchb.title}>модель</h3>
      <ul>{
        arrModel.map((elem, index) =>
          <label key={index} className={mchb.labelText}>
            <input type="checkbox" className={mchb.check} />
            <span>{elem}</span>
          </label>
        )
      }
      </ul>

    </div>
  )
}

export default ModelCheckbox