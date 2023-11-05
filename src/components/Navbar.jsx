import React from "react";
import SearchButton from "./SearchButton";

function Navbar({ onSearch, search }) {
  return (
    <nav className="note-app__header">
      <h1>Notes</h1>

      <SearchButton onSearch={onSearch} search={search} />
    </nav>
  );
}

export default Navbar;
