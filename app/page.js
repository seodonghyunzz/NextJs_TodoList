
import Today from "./component/todayDate";
import AddTodo from "./component/addTodo";

import Mainpage from "./page/mainpage";

export default function Home() {
  return (
      <div className="Main_Container">
          <div className="Content">
            <div className="TodoApp">
              <Mainpage/>
              {/*<TodoList/>             
              <AddTodo/>            */}
            </div>
          </div>
      </div>
  );
}
