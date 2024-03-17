import React from "react";

function Filter({ onCategoryChange, category, onSearchChange, search }) {

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search} // Connect input to state
        onChange={onSearchChange} // Update state when input changes
      />
      {/*value={category} Connect select to state*/}
      <select name="filter" value={category} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
