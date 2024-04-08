import item from "./items";
import Item from "./Item";
import { useState } from "react";
function List({ items, onDeleteItem, onCheckItem, onEditItem }) {
  return (
    <div>
      <div className="itemsDiv">
        {items.map((item) => (
          <Item
            itemObj={item}
            key={item.name}
            deleteItem={onDeleteItem}
            checkItem={onCheckItem}
            editItem={onEditItem}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
