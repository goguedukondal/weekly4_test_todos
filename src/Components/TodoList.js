import React from 'react'
import './Todolist.css'
import TodoItem from './TodoItem'
import { useItem } from './DataProvider'

function TodoList() {
  const {items} =useItem()

  return (
    <div className='todoList_Container'>
      {
        items.length>0?items.map((itm,i)=>{return  <TodoItem key = {i} {...itm}/>}):<h2>No Otems</h2>
      }
  
   
    </div>
  )
}

export default TodoList