import React from 'react';

export default function SearchForm({ value, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(event.target.elements.search.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" defaultValue={value} />
      <button type="submit">Search</button>
    </form>
  );
}