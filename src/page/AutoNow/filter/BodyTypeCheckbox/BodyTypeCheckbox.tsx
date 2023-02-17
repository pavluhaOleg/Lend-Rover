import React, { useState } from 'react'
import btch from './BodyTypeCheckbox.module.css'


const BodyTypeCheckbox = () => {
  const [arrBody] = useState<string[]>(['Любая', 'Купе', 'Седан', 'Универсал', 'Фургон', 'Хетчбек'])

  return (
    <div className={btch.wrapper}>
      <h3 className={btch.title}>тип кузова</h3>
      <ul>{
        arrBody.map((elem, index) =>
          <label key={index} className={btch.labelText}>
            <input
              type="checkbox"
              className={btch.check} />
            <span>{elem}</span>
          </label>
        )
      }
      </ul>

    </div>
  )
}

export default BodyTypeCheckbox