import CalendarComponent from "react-calendar";
import Today from "./component/todayDate";
import AddTodo from "./component/addTodo";
import useTodoStore from "./store/todoStore";
import TodoList from "./component/todolist";

export default function Home() {
  
  return (
    <>
      <div className="Main_Container">
        <div className="Content_Wrapper">
          <div className="Content">
            <h2>TodoApp</h2>
            <div className="TodoApp">
              <Today/>
              <TodoList/>             
              <AddTodo/>           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
