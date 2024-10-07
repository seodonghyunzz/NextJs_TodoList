
import TodoTable from "./todotable";
const PriorityList = ({fetchedTodos}) => {

    const filteredTodos = fetchedTodos.filter((todo) => todo.isPriority === true);

    return (
        <TodoTable fetchedtodos={filteredTodos}/>
    );
};
export default PriorityList