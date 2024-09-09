import Image from "next/image";
import { deleteTodo } from "../firebase/firebase";
const TodayDate = ({fetchedTodos}) => {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const CurrentDate = date.toLocaleDateString(undefined, options);
  const fetchedTodosArray = Object.values(fetchedTodos);
  const todos = fetchedTodosArray[1];
  const filteredTodos = todos.filter(todo => todo.date === CurrentDate)
  
  return (
    <div className="TodayPlanContainer">
      <div className='Date_Area'>
        <p>{CurrentDate}</p>
      </div>
      <div className="TodayPlan">
        {filteredTodos.map((todo,index) => ( 
          <div key={todo.id} className="TodayPlanList">
            <p>{index+1}. {todo.text}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default TodayDate