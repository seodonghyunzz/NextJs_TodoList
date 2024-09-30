
import PriorityStar from "../component/priorityStar";
const PriorityList = ({fetchedTodos}) => {

    const filteredTodos = fetchedTodos.filter((todo) => todo.isPriority === true);

    return (
        <div className="PriorityList">
            {filteredTodos.map((todo) => (
                <div key={todo.id} className="PriorityList_Todo">
                    <PriorityStar todo={todo}/>
                    <p>{todo.date}</p>
                    <p>{todo.text}</p>   
                </div>
            ))}
        </div>
    );
};
export default PriorityList