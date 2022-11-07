import React, { useState } from "react";

function Search({searcher}) {
  const [search, setSearch] = useState("")
  
  function handleSearch(e) {
    searcher(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
