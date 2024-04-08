import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);
  //  const [countItem, setCountItem] = useState(0);
  const [sortBy, setSortBy] = useState("input");
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [editedItemId, setEditedItemId] = useState(null); // State for tracking the edited item ID
  const [editedItemName, setEditedItemName] = useState("");
  const [editedItemQ, setEditedItemQ] = useState("");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "isChecked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems((toBeDelItems) => toBeDelItems.filter((item) => item.id !== id));
    }
  }

  function editItem(id, name, quantity) {
    setEditedItemId(id);
    setEditedItemName(name);
    setEditedItemQ(quantity);
    setIsOpen(true);
  }

  function checkItem(theArray) {
    const updatedItems = items.map((item) => {
      if (item.id === theArray) {
        return { ...item, isChecked: true };
      }
      return item;
    });
    const confirmed = window.confirm(
      "Are you sure you want to check the list item? You cannot uncheck it afterwards."
    );
    if (confirmed) {
      setItems(updatedItems);
      console.log(updatedItems);
    }
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    // Update the item's details in the state
    const updatedItems = items.map((item) => {
      if (item.id === editedItemId) {
        return { ...item, name: editedItemName, quantity: editedItemQ };
      }
      return item;
    });
    setItems(updatedItems);
    console.log(updatedItems);
    setIsOpen(false); // Close the modal
  };

  return (
    <div className="App">
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div>Edit Your Item</div>
            <span className="close" onClick={handleCancel}>
              &times;
            </span>
            <select
              className="selectNum"
              value={editedItemQ}
              onChange={(e) => setEditedItemQ(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="editInp"
              id="editInput"
              autocomplete="off"
              value={editedItemName}
              onChange={(e) => setEditedItemName(e.target.value)}
            />
            <button className="editPopBtn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
      <Header />
      <div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="selecto"
        >
          <option value="input">Sort by input</option>
          <option value="name">Sort by name</option>
          <option value="isChecked">Sort by completed</option>
        </select>
      </div>
      <Form onAddItem={handleAddItems} />
      <List
        items={sortedItems}
        onDeleteItem={deleteItem}
        onCheckItem={checkItem}
        onEditItem={editItem}
      />
      <div>
        <button onClick={handleClearList} className="clearBtn">
          Clear
        </button>
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
