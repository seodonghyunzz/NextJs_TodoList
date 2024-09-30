'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const PriorityStar = ({ todo }) => {
    const router = useRouter();
    const handlePriority = async (todo) => {
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
   
    return (
        <div className="PriorityStar">
            <button className="priorityBtn" onClick={() => handlePriority(todo)}>{todo.isPriority ? <Image src="/fullstar.png" width={30} height={30} alt="fullstar"/>:<Image src="/emptystar.png" width={30} height={30} alt="emptystar"/>}</button>
        </div>
    );
};
export default PriorityStar