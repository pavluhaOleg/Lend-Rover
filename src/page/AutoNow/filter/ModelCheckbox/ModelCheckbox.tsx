import React, { useState } from 'react'
import { CardAutoNow } from '../../../../Infa-arr/InfaArr';
import mchb from './ModelCheckbox.module.css'

type ModelAutoNowType = {
  model: string
}

const ModelCheckbox = () => {
  const [agreeToAllTerms, setAgreeToAllTerms] = useState(false);

  const [arrModel] = useState<ModelAutoNowType[]>(CardAutoNow)
  const table: any = {};
  const model = arrModel.filter(({ model }) => (!table[model] && (table[model] = 1)));


  return (
    <div className={mchb.wrapper}>
      <h3 className={mchb.title}>модель</h3>
      <ul>{
        model.map((elem, index) =>
          
          <label key={index} className={mchb.labelText}>

            <input type="checkbox"
              className={mchb.check}
              onChange={(event) => { setAgreeToAllTerms(event.target.checked) }}
              checked={agreeToAllTerms}
            />

            <span>{elem.model}</span>
          </label>
        )
      }
      </ul>

    </div>
  )
}

export default ModelCheckbox