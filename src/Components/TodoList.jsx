import React, { useState } from "react";

function TodoList() {
  const [addedItem, setAddedItem] = useState("");
  const [items, setItems] = useState([]);

  const inputItem = (e) => {
    setAddedItem(e.target.value);
  };
  const addItem = () => {
    setItems((oldIems) => {
      return [...oldIems, addedItem];
    });
    setAddedItem("");
  };
  const deleteItem = (id) => {
    setItems((oldIems) => {
      return oldIems.filter((arrItem, index) => {
        return index !== id;
      });
    });
  };
  const clearAll=()=>{
    setItems([])
  }
  return (
    <>
      <div className="w-full h-screen bg-yellow-300 flex justify-center items-center">
        <div className="w-4/5 md:w-1/3 overflow-auto bg-gray-400 h-4/5 rounded-3xl flex flex-col item-center ">
          <h1 className="w-full bg-red-200 mt-5 text-center text-4xl font-serif font-bold">
            Todo List
          </h1>
          <div className=" flex justify-center items-center">
            <input
              className="bg-transparent border-b-2 w-5/6 text-red-950 placeholder-gray-700  border-red-950 py-5 text-center outline-none mx-5 text-2xl md:text-3xl"
              type="text"
              name="list"
              id="list"
              placeholder="Add a item"
              onChange={inputItem}
              value={addedItem}
            />
            <button
              disabled={addedItem.length === 0}
              className="w-1/6 text-2xl"
              onClick={addItem}
            >
              <i className=" text-green-700 hover:text-green-900 hover:scale-110 duration-300 fa-solid fa-circle-check"></i>
            </button>
          </div>
          <ol>
            <h1 className="text-center capitalize text-2xl my-3">{items.length === 0 && "No items to preview"}</h1>
            {items.map((itemVal, index) => {
              return (
                <div key={index} className=" flex items-center">
                  <i
                    className="text-red-600 hover:text-red-700 ml-5 cursor-pointer text-xl fa-solid fa-circle-xmark"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  ></i>
                  <li
                    id={index}
                    className="py-1 px-7 text-2xl text-blue-700 font-bold capitalize"
                  >
                    {itemVal}
                  </li>
                </div>
              );
            })}
          </ol>
        <button className={`bg-red-500 w-1/2 mt-4 mx-auto py-2 px-4 rounded-full text-white text-xl ${items.length===0 ?"hidden":""}`} onClick={clearAll}>Clear All</button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
