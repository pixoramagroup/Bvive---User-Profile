import React from 'react'
import SearchIcon  from "@mui/icons-material/Search";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
      <button type="submit" class="searchButton">
      <SearchIcon></SearchIcon>

     </button>
   </div>
</div>
  )
}

export default SearchBar
