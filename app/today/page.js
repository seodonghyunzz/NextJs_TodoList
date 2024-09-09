import TodayDate from "../component/todayDate";
export default async function Today() {
    const fetchedTodos = await getTodayTodosApiCall();
    return (
        <TodayDate fetchedTodos={fetchedTodos}/>
    );
}

export async function getTodayTodosApiCall() {
    const res = await fetch("http://localhost:3000/api", {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
  }
  