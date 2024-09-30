import { NextResponse } from "next/server";
import { getTodos , addTodo, deleteTodo, updateTodo } from "../firebase/firebase";

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
export async function DELETE(request) {
    const { id } = await request.json();
    console.log(id);
    await deleteTodo(id);
    const response = {
      message: "delete success"
    }
    return NextResponse.json(response);
  }
  
  export async function PUT(request) {
    const { id, todo } = await request.json();
    const updatedTodo = await updateTodo({ id, todo });
    const response = {
      message: "update success",
      data: updatedTodo
    }
    return NextResponse.json(response);
  }