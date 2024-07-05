import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos : [],
    setTodos: (todo)=>set({todos:todo}),
    removeTodo: (id) => 
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    checkTodo: (id) =>
         set((state) => ({
            todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
            ),
        })),
     editTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            ),
        })),
    updateTodo: (id, editValue) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text: editValue, isEditing: false } : todo
              ),
            })),
}));

export default useTodoStore;