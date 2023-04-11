import React from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import './TodoLogic.css'
function TodoLogic() {
  return (
    <div className='TodoLogic_Container'>
    <InputTodo/>
    <TodoList/>
    </div>
  )
}

export default TodoLogic