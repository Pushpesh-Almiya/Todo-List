import React, { useState } from 'react'

function TodoList() {
    const [addedItem, setAddedItem]=useState("")
    const[items, setItems]= useState([])

    const inputItem=(e)=>{
        setAddedItem(e.target.value)
    }
    const addItem =()=>{
        setItems((oldIems)=>{
            return [...oldIems,addedItem]
        })
        setAddedItem("")
    }
  return (
    <>
      <div className='w-full h-screen bg-yellow-300 flex justify-center items-center'>
        <div className='w-4/5 md:w-1/3 bg-cyan-400 h-4/5 rounded-3xl flex flex-col item-center '>
            <h1 className='w-full bg-red-200 mt-5 text-center text-4xl font-serif font-bold'>Todo List</h1> 
            <div className=' flex justify-center items-center'>
            <input className='bg-transparent border-b-2 w-5/6 text-red-950 placeholder-gray-700  border-red-950 py-5 text-center outline-none mx-5 text-3xl' type="text" name="list" id="list" placeholder='Add a item' onChange={inputItem} value={addedItem}/>
            <button className='w-1/6 text-2xl' onClick={addItem}><i className=" text-green-700 hover:text-green-900 hover:scale-110 duration-300 fa-solid fa-circle-check"></i></button>
            </div>
            <ol>
                {items.map((itemVal)=>{
                    return <li className='py-1 px-7 text-2xl text-red-800 font-bold capitalize'>{itemVal}</li>
                })}
            </ol>
        </div>
      </div>
    </>
  )
}

export default TodoList
