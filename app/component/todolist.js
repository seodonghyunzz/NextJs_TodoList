import TodoTable from "./todotable";

export default function TodoList({year,month,date,fetchedtodos}) {

    const filteredTodos = fetchedtodos.filter((todo) => todo.date === `${year}년 ${month}월 ${date}일`);
    
    return <TodoTable fetchedtodos={filteredTodos}/>;
    
}