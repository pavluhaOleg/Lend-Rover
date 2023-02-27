import fil from './Filter.module.css'

import FuelTypeCheckbox from './FuelTypeCheckbox/FuelTypeCheckbox'
import ModelCheckbox from './ModelCheckbox/ModelCheckbox'

type ChoiceType = {
  Choice: (elem: string) => void;
  setAgreeToAllTerms: (elem: boolean) => void;
}

const Filter = ({ Choice, setAgreeToAllTerms }: ChoiceType) => {
  return (
    <div className={fil.filter}>
      <ModelCheckbox Choice={Choice} setAgreeToAllTerms={setAgreeToAllTerms} />
      <FuelTypeCheckbox />
    </div>
  )
}

export default Filter