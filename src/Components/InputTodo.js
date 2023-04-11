import React, { useState } from 'react'
import './InputTodo.css'
import {FaPlus} from "react-icons/fa";
import { useItem } from './DataProvider';

function InputTodo() {
  const {addItems} = useItem()
  const [item,setItem] = useState('')
  const add=()=>{
    addItems(item)
    setItem('')
  }
  return (
    <div className='Input_Container'>
        <div className='input_box'>
        <input 
        type='text'
        value={item}
        onChange={(e)=>setItem(e.target.value)}
        placeholder='Add todo.. '/>
         <FaPlus onClick={add} />
        </div>
         
    </div>
  )
}

export default InputTodo