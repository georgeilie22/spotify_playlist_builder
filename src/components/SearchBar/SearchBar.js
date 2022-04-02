import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);

    this.state = {
      searchValue: "",
    };
  }

  search() {
    this.props.onSearch(this.state.searchValue);
  }

  handleSearchValueChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleSearchValueChange}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
