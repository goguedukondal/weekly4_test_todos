import React from "react";
import { useState } from "react";
import "./TodoItem.css";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useItem } from "./DataProvider";
function TodoItem({item,id,complete}) {
  const {deleteItem,updateItem} = useItem()
  const [editToggle, setEditToggle] = useState(false);

  const [editval, setEditValue] = useState(item);

  const edItem = () => {
    
      updateItem(id,editval);
      setEditToggle(!editToggle);
  };
  return (
    <div className="TodoItem_Container">
      <div className={!editToggle ? 'show-edit' :''}>
        <input type="text" value={editval} onChange={(e) => setEditValue(e.target.value)}/>
        <button onClick={edItem}>Update</button>
    </div>
      <div className="input_part">
        <input type="checkbox" />
        <label>{item}</label>
      </div>
      <div className="edit_part">
        <FaEdit onClick={() => setEditToggle(!editToggle)} />
        <FaRegTrashAlt onClick={()=>{deleteItem(id)}}  />
      </div>
    </div>
  );
}

export default TodoItem;
