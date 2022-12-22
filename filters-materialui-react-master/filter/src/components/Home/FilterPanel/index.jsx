import React from 'react'
import FilterListToggle from '../../Common/FilterListToggle'
import { categoryList } from '../../../constants'

export default function FilterPanel({selectedCategory, selectToggle}) {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className='label'>Category</p>
        <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle}/>
      </div>
      {/* Cusines */}
      {/* Price Range */}
      {/* Star Rating */}

    </div>
  )
}
