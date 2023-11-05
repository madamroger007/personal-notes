import React from "react";


function Navbar({ onSearch,search }) {

  return (
    <nav className="note-app__header">
      <h1>Notes</h1>
      
    <input
      type="text"
      className="note-search"
      placeholder="Search..."
      value={search}
      onChange={onSearch}
    />
  
    </nav>
  );
}

export default Navbar;
