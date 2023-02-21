import { useState } from 'react'
import { CardAutoNow } from '../../../../Infa-arr/InfaArr'
import ftch from './FuelTypeCheckbox.module.css'

type FuelAutoNowType = {
  fuel: string
}

const FuelTypeCheckbox = () => {
  const [arrFuel] = useState<FuelAutoNowType[]>(CardAutoNow)

  const table: any = {};
  const fuel = arrFuel.filter(({ fuel }) => (!table[fuel] && (table[fuel] = 1)));

  return (
    <div className={ftch.wrapper}>
      <h3 className={ftch.title}>вид топлива</h3>
      <ul>{
        fuel.map((elem, index) =>
          <label key={index} className={ftch.labelText}>
            <input type="checkbox" className={ftch.check} />
            <span>{elem.fuel}</span>
          </label>
        )
      }
      </ul>

    </div>
  )
}

export default FuelTypeCheckbox