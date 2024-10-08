import TodoTable from "./todotable";

export default function TodoList({year,month,date,fetchedtodos}) {

    const filteredTodos = fetchedtodos.filter((todo) => todo.date === `${year}. ${month}. ${date}.`);
    
    return <TodoTable fetchedtodos={filteredTodos}/>;
    
}