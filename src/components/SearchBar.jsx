import React from 'react';

export default function SearchBar({ onQuery, searchGallery }) {
  var inputValue = '';
  function handleChange(evt) {
    inputValue = evt.target.value;
    onQuery(inputValue);
  }

  function queryChange() {
    searchGallery();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    queryChange();
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button
          type="button"
          className="SearchForm-button"
          onClick={queryChange}
        >
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
