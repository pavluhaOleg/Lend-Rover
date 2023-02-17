import { useState } from 'react'
import ftch from './FuelTypeCheckbox.module.css'


const FuelTypeCheckbox = () => {
  const [arrFuel] = useState<string[]>(['Любой', 'Дизель', 'Электрический', 'Гибрид', ' Бензин'])

  return (
    <div className={ftch.wrapper}>
      <h3 className={ftch.title}>вид топлива</h3>
      <ul>{
        arrFuel.map((elem, index) =>
          <label key={index} className={ftch.labelText}>
            <input type="checkbox" className={ftch.check} />
            <span>{elem}</span>
          </label>
        )
      }
      </ul>

    </div>
  )
}

export default FuelTypeCheckbox