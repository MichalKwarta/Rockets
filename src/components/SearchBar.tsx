import {ReactComponent as SearchIcon}  from '../assets/images/searchIcon.svg'

function SearchBar() {
  return (
      <div className='SearchBar__wrapper'>
          <SearchIcon className='SearchBar__icon'/>
      <input type="text" className = "SearchBar" placeholder='Search for rocket'/>
    </div>
  )
}

export default SearchBar