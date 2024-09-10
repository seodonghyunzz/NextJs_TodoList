'use client'
import Image from "next/image";
import { priorityTodo } from "../firebase/firebase";
const PriorityStar = ({ todo }) => {
    const handlePriority = async( todo ) => {
        priorityTodo({todo});
        setTimeout(()=>{window.location.reload()},5)
    }
    return (
        <div className="PriorityStar">
            <button className="priorityBtn" onClick={() => handlePriority(todo)}>{todo.isPriority ? <Image src="/fullstar.png" width={30} height={30} alt="fullstar"/>:<Image src="/emptystar.png" width={30} height={30} alt="emptystar"/>}</button>
        </div>
    );
};
export default PriorityStar