import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const search = () => {
    props.onSearch(searchValue);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleSearchValueChange}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
