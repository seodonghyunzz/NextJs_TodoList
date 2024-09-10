'use client'

import { useState } from "react";
import Image from "next/image";
import { deleteTodo, getTodos, priorityTodo,checkTodo } from "../firebase/firebase";
import { useRouter } from "next/navigation";
export default function TodoList({year,month,date,fetchedtodos}) {
    const [editValue, setEditValue] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);
    const router = useRouter()
    const filteredTodos = fetchedtodos.filter((todo) => todo.date === `${year}년 ${month}월 ${date}일`);


    const handleDelete = async(id) => {
        deleteTodo(id)
        setTimeout(()=>{router.refresh()},3)
    }
    const handlePriority = async( { todo } ) => {
        priorityTodo({todo});
        setTimeout(()=>{router.refresh()},5)
    }
    const handleChecked = async( { todo } ) => {
        checkTodo({todo});
        setTimeout(()=>{router.refresh()},5)
    }
    return(
        <>
        <div className="Event_Area">
                {filteredTodos.map((todo,index)=>(
                <div key={todo.id} className={`${todo.isChecked?'todolist_checked':'todolist'}`}>
                    <div className="todolist_content">
                        <p className="listindex">{index+1}.</p>
                        {/* 수정모드 */}
                        {todo.isEditing && editingTodoId === todo.id ?
                        <form>
                        <input
                        type="text"
                        className="editinput"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        placeholder="할 일을 수정하세요."
                        onKeyDown={event => {
                         if(event.key=="Enter"){
                           handleUpdate(todo.id);
                         }
                        }}
                       />
                       <button type="submit" className="editinput_btn" onClick={() => handleUpdate(todo.id)}>enter</button>
                       </form>
                    //    할일목록
                        :<div>
                            <p className="todotext">{todo.text}</p>
                        </div>
                        }
                        
                    </div>
                    <button className="checkBtn" onClick={() => handleChecked({todo})}><Image src="/check.png" width={30} height={30} alt="check"/></button>
                    <button className="editBtn" ><Image src="/edit.png" width={30} height={30} alt="edit"/></button>
                    <button className="deleteBtn" onClick={() => handleDelete(todo.id)}><Image src="/delete.png" width={30} height={30} alt="delete"/></button>
                    <button className="priorityBtn" onClick={() => handlePriority({todo})}>{todo.isPriority ? <Image src="/fullstar.png" width={30} height={30} alt="fullstar"/>:<Image src="/emptystar.png" width={30} height={30} alt="emptystar"/>}</button>
                </div>
                ))}
            
        </div>  
        </>
    )
}