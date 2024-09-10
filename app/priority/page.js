import PriorityList from "@/app/component/priorityList";
export default async function Priority() {
    const fetchedTodos = await fetchedTodosApiCall();
    return (
        <PriorityList fetchedTodos={fetchedTodos.data}/>
    );
}

async function fetchedTodosApiCall() {
    const res = await fetch("http://localhost:3000/api", {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}