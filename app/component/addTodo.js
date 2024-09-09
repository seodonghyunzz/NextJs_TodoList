'use client'
import { useState } from "react"
import useTodoStore from "../store/todoStore";
import { useRouter } from "next/navigation";

export default function AddTodo({year,month,date}) {
    const {todos,setTodos} = useTodoStore();
    const [inputValue, setInputValue] = useState('');
    const router = useRouter()
    const saveTodo = async() => {
      if (inputValue.trim() === '') return;

      const newTodo = {
        text: inputValue,
        date: `${year}년 ${month}월 ${date}일`,
        isChecked : false,
        isEditing : false,
        isPriority : false
      };

      setInputValue('');
      
      await fetch('http://localhost:3000/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todo: newTodo
        }),
        cache: 'no-store'
      })
      setTimeout(()=>{router.refresh()},1)
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