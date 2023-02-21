import fil from './Filter.module.css'

import FuelTypeCheckbox from './FuelTypeCheckbox/FuelTypeCheckbox'
import ModelCheckbox from './ModelCheckbox/ModelCheckbox'

const Filter = () => {
  return (
    <div className={fil.filter}>
      <ModelCheckbox />
      <FuelTypeCheckbox />
    </div>
  )
}

export default Filter