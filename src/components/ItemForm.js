import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState(""); // State for item name
  const [itemCategory, setItemCategory] = useState("Produce"); // State for item category

  function handleNameChange(event) {
    setItemName(event.target.value); // Update state with the new item name
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value); // Update state with the new item category
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const newItem = {
      id: uuid(), // Generate a unique id
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the parent component via callback
    onItemFormSubmit(newItem);

    // Clear form fields after submission
    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemName} // Connect input to state
          onChange={handleNameChange} // Update state when input changes
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={itemCategory} // Connect select to state
          onChange={handleCategoryChange} // Update state when select changes
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
