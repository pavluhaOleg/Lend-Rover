import React from 'react'
import ichb from './ItemCheckbox.module.css'

const ItemCheckbox = () => {
  return (
    
      <label className={ichb.labelText}>
        <input type="checkbox" className={ichb.check} />
        <span>Любая</span>
      </label>
    
  )
}

export default ItemCheckbox