import React  from "react";

function SearchButton({onSearch,search}){
    return (
        <input
      type="text"
      className="note-search"
      placeholder="Search..."
      value={search}
      onChange={onSearch}
    />
    )
}

export default SearchButton