
import AddTodo from "@/app/component/addTodo";
import TodoList from "@/app/component/todolist";

export default async function CalendarDetail({params}) {
    const date = params.date;
    const month = params.month;
    const year = params.year;
    const todos = await fetchedTodosApiCall();
    return (
        <div className="CalendarDetail">
            <div className="CalendarDetail_Header">
              <p>{year}년 {month}월 {date}일</p>  
            </div>
            <div className="CalendarDetail_Body">
              <TodoList year={year} month={month} date={date} fetchedtodos={todos.data}/>
              <AddTodo year={year} month={month} date={date}/>
            </div>
        </div>
    );
}

export async function fetchedTodosApiCall() {
    try {
      const res = await fetch("http://localhost:3000/api", {
        cache: "no-store",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }