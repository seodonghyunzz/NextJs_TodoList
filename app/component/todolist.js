'use client'
import useTodoStore from "../store/todoStore";
import { useState } from "react";
import Image from "next/image";


export default function TodoList({year,month,date,fetchedtodos}) {
    const {removeTodo,checkTodo,editTodo,updateTodo,priorityTodo} = useTodoStore();
    const [editValue, setEditValue] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);
    

    const filteredTodos = fetchedtodos.filter((todo) => todo.date === `${year}년 ${month}월 ${date}일`);


    const handleDelete = (id) => {
        removeTodo(id);
    }
    const handleCheck = (id) => {
        checkTodo(id);
    }
    const handleEdit = (id,text) => {
        setEditingTodoId(id)
        setEditValue(text);
        editTodo(id);
    }

    const handleUpdate = (id) => {
        updateTodo(id,editValue);
        setEditValue('');
        setEditingTodoId(null);
    }
    const handlePriority = (id) => {
        priorityTodo(id);
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
                    <button className="checkBtn" onClick={() => handleCheck(todo.id)}><Image src="/check.png" width={30} height={30} alt="check"/></button>
                    <button className="editBtn" onClick={() => handleEdit(todo.id, todo.text)}><Image src="/edit.png" width={30} height={30} alt="edit"/></button>
                    <button className="deleteBtn" onClick={() => handleDelete(todo.id)}><Image src="/delete.png" width={30} height={30} alt="delete"/></button>
                    <button className="priorityBtn" onClick={() => handlePriority(todo.id)}>{todo.isPriority ? <Image src="/fullstar.png" width={30} height={30} alt="fullstar"/>:<Image src="/emptystar.png" width={30} height={30} alt="emptystar"/>}</button>
                </div>
                ))}
            
        </div>  
        </>
    )
}