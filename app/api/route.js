import { NextResponse } from "next/server";
import { getTodos , addTodo } from "../firebase/firebase";

export async function GET() {
    const fetchedTodos = await getTodos();
    const response = {
        message: "success",
        data: fetchedTodos
    }
    return NextResponse.json(response);
}
export async function POST(request) {
    const { todo } = await request.json();
    const addedTodo = await addTodo({ todo });
    
    const response = {
        message: "add success",
        data: addedTodo
    }
    return NextResponse.json(response);
}