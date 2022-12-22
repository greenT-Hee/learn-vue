import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './style.css'

export default function SearchBar({value, ChangeInput}) {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon"/>
      <input 
      type="text" 
      placeholder='Woodland Hills' 
      value={value}
      onChange={ChangeInput}
      />
    </div>
  )
}
