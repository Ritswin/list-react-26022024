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
    setItems((toBeDelItems) => toBeDelItems.filter((item) => item.id !== id));
  }

  function checkItem(theArray) {
    const updatedItems = items.map((item) => {
      if (item.id === theArray) {
        return { ...item, isChecked: true };
      }
      return item;
    });
    setItems(updatedItems);
    console.log(updatedItems);
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="App">
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
