import { NextResponse } from "next/server";
import { SearchTodo } from "../../firebase/firebase";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search');
    const fetchedTodos = await SearchTodo(query);
   
    const response = {
        message: "success",
        data: fetchedTodos
    }
    return NextResponse.json(response);
  }