'use client'
import { useState } from "react"
import useTodoStore from "../store/todoStore";

export default function AddTodo(){
    const {todos,setTodos} = useTodoStore();
    const [inputValue, setInputValue] = useState('');
    const saveTodo = () => {
      if (inputValue.trim() === '') return;

      const newTodo = {
        id : Date.now(),
        text: inputValue,
        isChecked : false,
        isEditing : false,
      };

      setTodos([...todos,newTodo]);
      setInputValue('');
    };
    
    return(
        <>
        <div className="Input_Area">
            <input
             type="text"
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder="할 일을 입력하세요."
             onKeyDown={event => {
              if(event.key=="Enter"){
                saveTodo();
              }
             }}
            />
            <button type="submit" onClick={saveTodo}>enter</button>
        </div>   
        </>
    )
}