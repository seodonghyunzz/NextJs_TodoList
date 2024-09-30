'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TodoList({year,month,date,fetchedtodos}) {
    const router = useRouter()
    const filteredTodos = fetchedtodos.filter((todo) => todo.date === `${year}년 ${month}월 ${date}일`);
    
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
    return(
        <>
        <div className="Event_Area">
                {filteredTodos.map((todo,index)=>(
                <div key={todo.id} className={`${todo.isChecked?'todolist_checked':'todolist'}`}>
                    <div className="todolist_content">
                        <p className="listindex">{index+1}.</p>
                        {/* 수정모드 */}
                        {todo.isEditing === todo.id ?
                        <form>
                        <input
                        // type="text"
                        // className="editinput"
                        // value={editValue}
                        // onChange={(e) => setEditValue(e.target.value)}
                        // placeholder="할 일을 수정하세요."
                        // onKeyDown={event => {
                        //  if(event.key=="Enter"){
                        //    handleUpdate(todo.id);
                        //  }
                        // }}
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