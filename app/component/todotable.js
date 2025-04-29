'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";

const TodoTable = ({fetchedtodos}) => {
    const router = useRouter()
    console.log(fetchedtodos)
    const handleDelete = async (id) => {
        await fetch('http://localhost:3000/api/', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        setTimeout(() => { router.refresh() }, 0.1);
      }
      
      const handlePriority = async ({ todo }) => {
        await fetch('http://localhost:3000/api/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: todo.id,
            todo: { ...todo, isPriority: !todo.isPriority }
        }),
        });
        setTimeout(() => { router.refresh() }, 0.1);
      }
      
      const handleChecked = async ({ todo }) => {
        await fetch('http://localhost:3000/api/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            id: todo.id,
            todo: { ...todo, isChecked: !todo.isChecked }
        }),
        });
        setTimeout(() => { router.refresh() }, 0.1);
      }

      const handleIsEditing = async (id) => {
         await fetchedtodos.map((todo) => {
          if(todo.id === id){
            fetch('http://localhost:3000/api/', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                id: todo.id,
                todo: { ...todo, text: todo.text , isEditing: !todo.isEditing }
            }),
            });
            setTimeout(() => { router.refresh() }, 0.1);
          }
        })
      }
      
      const handleEdit = async ({ todo }) => {
        await fetch('http://localhost:3000/api/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            id: todo.id,
            todo: { ...todo, isEditing: false }
        }),
        });
        setTimeout(() => { router.refresh() }, 0.1);
      }
      const handleEditCancel = async ({ todo }) => {
        await fetch('http://localhost:3000/api/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            id: todo.id,
            todo: { ...todo, text: todo.text , isEditing: false }
        }),
        });
        setTimeout(() => { router.refresh() }, 0.1);
      }

    return (
        <div className="TodoTable">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Text</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {fetchedtodos  && fetchedtodos .length > 0 ? (
                  fetchedtodos
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((todo, index) => (
                <tbody key={todo.id}>
                    <tr className={!todo.isEditing && todo.isChecked ? "isChecked_tr" : ""}>
                        <td>{index+1}.</td>
                        <td>{todo.date}</td>
                        {todo.isEditing ?
                        (
                          <td className='inputbox'> 
                            <input type="text" defaultValue={todo.text} onChange={(e) => todo.text = e.target.value} onKeyDown={(e) => e.key === "Enter" && handleEdit({todo})}/>
                            <button onClick={() => handleEdit({todo})}>Save</button>
                            <button onClick={() => handleEditCancel({todo})}>x</button>
                          </td>
                        )
                        :(
                          <td>{todo.text}</td>
                          
                        )}
                        <td>
                            <button className="checkBtn" onClick={() => handleChecked({todo})}><Image src="/check.png" width={20} height={20} alt="check"/></button>
                            <button className="editBtn" onClick={() => handleIsEditing(todo.id)}><Image src="/edit.png" width={20} height={20} alt="edit"/></button>
                            <button className="deleteBtn" onClick={() => handleDelete(todo.id)}><Image src="/delete.png" width={20} height={20} alt="delete"/></button>
                            <button className="priorityBtn" onClick={() => handlePriority({todo})}>{todo.isPriority ? <Image src="/fullstar.png" width={20} height={20} alt="fullstar"/>:<Image src="/emptystar.png" width={20} height={20} alt="emptystar"/>}</button>
                        </td>
                   </tr>   
                </tbody>
                ))):(
                  <tbody>
                    <tr>
                        <td colSpan={4}>No Data</td>
                    </tr>
                  </tbody>
                )
                }
            </table>
        </div>
    );
}

export default TodoTable;

