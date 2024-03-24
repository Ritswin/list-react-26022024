import { useState } from "react";

function Item({ itemObj, deleteItem, checkItem }) {
  return (
    <div className={itemObj.isChecked ? "itemChecked" : "itemItem"}>
      <div className="contentWrapper">
        <h2>
          <div className="textDiv">
            {itemObj.quantity} {"    "}
            {itemObj.name}
          </div>
          <div className="btnDiv">
            <input
              type="image"
              id="trashBtn"
              className="itemBtn"
              src={
                itemObj.isChecked ? "../checkedTrash.png" : "../trashIcon.png"
              }
              alt="Discard"
              onClick={() => deleteItem(itemObj.id)}
            ></input>
            <input
              type="image"
              id="completedBtn"
              className="itemBtn"
              src={
                itemObj.isChecked ? "../checkedCheck.png" : "../checkIcon.png"
              }
              alt="Check"
              onClick={() => checkItem(itemObj.id, itemObj)}
            ></input>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default Item;
