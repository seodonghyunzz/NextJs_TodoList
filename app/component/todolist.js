'use client'
import useTodoStore from "../store/todoStore";
import { useState } from "react";
export default function TodoList(){
    const {todos,removeTodo,checkTodo,editTodo,updateTodo} = useTodoStore();
    const [editValue, setEditValue] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);
    const handleDelete = (id) => {
        removeTodo(id);
    }
    const handleCheck = (id) => {
        checkTodo(id);
    }
    const handleEdit = (id,text) => {
        setEditingTodoId(id);
        setEditValue(text);
        editTodo(id);
    }

    const handleUpdate = (id) => {
        updateTodo(id,editValue);
        setEditValue('');
        setEditingTodoId(null);
    }
    
    return(
        <>
        <div className="Event_Area">
                {todos.map((todo,index)=>(
                <div key={todo.id} className={`${todo.isChecked?'todolist_checked':'todolist'}`}>
                    <div className="todolist_content">
                        <p className="listindex">{index+1}.</p>
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
                        :<p className="todotext">{todo.text}</p>
                        }
                    </div>
                    <button className="checkBtn" onClick={() => handleCheck(todo.id)}><img src="check.png" width={30} height={30}/></button>
                    <button className="editBtn" onClick={() => handleEdit(todo.id, todo.text)}><img src="edit.png" width={30} height={30}/></button>
                    <button className="deleteBtn" onClick={() => handleDelete(todo.id)}><img src="delete.png" width={30} height={30}/></button>
                </div>
                ))}
            
        </div>  
        </>
    )
}