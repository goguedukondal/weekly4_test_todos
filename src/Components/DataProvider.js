import React, { createContext, useContext, useState } from "react";
import { v4 as idGen } from "uuid";
const MyContext = createContext();
export const useItem = () => useContext(MyContext);

const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
  
    const addItems = (item) => {
      setItems([
        ...items,
          
        {
          id: idGen(),
          item: item,
          status:complete  
        },
      ]);
    };
  
    const updateItem = (id, data) => {
      setItems(items.map((t) => (t.id === id ? { ...t, item: data } : t)));
    };
  
    const deleteItem = (id) => {
      setItems(items.filter((ts) => ts.id !== id));
    };
  
    return (
      <MyContext.Provider value={{ items, addItems, deleteItem, updateItem }}>
        {children}
      </MyContext.Provider>
    );
  };
  
  export default DataProvider;
