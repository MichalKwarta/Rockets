import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";

function SearchBar() {
  return (
    <div className="SearchBar__wrapper">
      <SearchIcon className="SearchBar__icon" />
      <input type="text" className="SearchBar" placeholder="Dummy seach bar" />
    </div>
  );
}

export default SearchBar;
