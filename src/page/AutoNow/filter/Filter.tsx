import React from 'react'
import fil from './Filter.module.css'

import BodyTypeCheckbox from './BodyTypeCheckbox/BodyTypeCheckbox'
import FuelTypeCheckbox from './FuelTypeCheckbox/FuelTypeCheckbox'
import ModelCheckbox from './ModelCheckbox/ModelCheckbox'
import TransmissionCheckbox from './TransmissionCheckbox/TransmissionCheckbox'

const Filter = () => {
  return (
    <div className={fil.filter}>
      <ModelCheckbox />
      <FuelTypeCheckbox />
      <TransmissionCheckbox />
      <BodyTypeCheckbox />
    </div>
  )
}

export default Filter