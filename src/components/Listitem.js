import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
  const [editedItem, setEditedItem] = useState(props.item);
  const [editMode, setEditMode] = useState(false);
  const editHandeler = (e) => {
    setEditedItem(e.target.value);
  };
  const saveTaskHandler = () => {
    setEditMode(false);
    props.editTask(editedItem, props.idx);
  };
  return (
    <div className="list">
      {editMode ? (
        <>
          <textarea
            id="editTask"
            onChange={editHandeler}
            placeholder="Edit Task"
            value={editedItem}
          ></textarea>
          <button
            id="saveTask"
            onClick={saveTaskHandler}
            disabled={editedItem.trim().length === 0}
          >
            Done
          </button>
        </>
      ) : (
        <>
          {props.item}
          <button className="edit" onClick={() => setEditMode(true)}>
            edit
          </button>
          <button
            className="delete"
            onClick={() => props.deleteTask(props.idx)}
          >
            delete
          </button>
        </>
      )}
    </div>
  );
}

export default ListItem;
