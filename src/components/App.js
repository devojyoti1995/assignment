import React, { useState } from "react";
import "./../styles/App.css";
import ListItem from "./Listitem";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const addItem = () => {
    items.push(newItem);
    setItems([...items]);
    setNewItem("");
  };
  const newChangeItem = (e) => {
    //console.log(e.target.value);
    setNewItem(e.target.value);
  };
  const deleteHandler = (itemIdx) => {
    items.splice(itemIdx, 1);
    setItems([...items]);
  };
  const editTaskHandler = (editedValue, idx) => {
    items[idx] = editedValue;
    setItems([...items]);
  };
  return (
    <div id="main" className="main">
      <div className="textarea">
        <input id="task" onChange={newChangeItem} value={newItem}></input>
        <button
          id="btn"
          onClick={addItem}
          disabled={newItem.trim().length === 0}
        >
          Add Item
        </button>
      </div>
      {items.map((item, idx) => (
        <ListItem
          item={item}
          key={`${item}_${idx}`}
          idx={idx}
          editTask={editTaskHandler}
          deleteTask={deleteHandler}
        />
      ))}
    </div>
  );
}

export default App;
