import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return alert("Please enter an item first");
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    setName("");
    setQuantity(1);
    console.log(newItem);
    onAddItem(newItem);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="formo">
        <select
          className="selectNum"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {/* <option value="0"></option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option> */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          autocomplete="off"
          type="text"
          id="tasks"
          name="tasks"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a task."
          className="tasko"
        ></input>
        <button className="formBtn">I Got This!</button>
      </form>
    </div>
  );
}

export default Form;
