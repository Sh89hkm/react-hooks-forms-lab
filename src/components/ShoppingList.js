import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState(""); // State for search text

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  // Filter items based on category and search text
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && !searchText) return true;

    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const nameMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
    
    return categoryMatch && nameMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem} />
      <Filter onCategoryChange={handleCategoryChange} category={selectedCategory} onSearchChange={handleSearchChange} search={searchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
