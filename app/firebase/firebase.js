import { initializeApp } from "firebase/app";
import { getFirestore , collection, getDocs , setDoc , doc , deleteDoc, updateDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STRORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getTodos() {
    const query = await getDocs(collection(db, "todos"));
    if (query.empty) {
        return [];
    }
    const fetchedTodos = [];
    query.forEach((doc) => {
        
        const todo = {
            id: doc.id,
            text: doc.data().text,
            isChecked: doc.data().isChecked,
            isEditing: doc.data().isEditing,
            isPriority: doc.data().isPriority,
            date: doc.data().date
        }
        fetchedTodos.push(todo);
    });
    return fetchedTodos
}

export async function addTodo({ todo }) {
    const newTodoRef = doc(collection(db, "todos"));

    const newTodo = {
     id: newTodoRef.id,
     text: todo.text,
     isChecked: todo.isChecked,
     isEditing: todo.isEditing,
     isPriority: todo.isPriority,
     date: todo.date
    };

    await setDoc(newTodoRef, newTodo);
    return newTodo;
}

export async function deleteTodo(id) {
    if(id === null){
        return null;
    }
    await deleteDoc(doc(db, "todos", id));
    return null;

}

export async function updateTodo({ id, todo }) {
    const todoRef = doc(db, "todos", id);
    const updateTodo = await updateDoc(todoRef, {
      text: todo.text,
      isChecked: todo.isChecked,
      isEditing: todo.isEditing,
      isPriority: todo.isPriority,
      date: todo.date
    });
    return updateTodo;
  }

export async function SearchTodo(text) {
    const query = await getDocs(collection(db, "todos"));
    if (query.empty) {
        return [];
    }
    const fetchedTodos = [];
    query.forEach((doc) => {
        if(doc.data().text.includes(text)){
            const todo = {
                id: doc.id,
                text: doc.data().text,
                isChecked: doc.data().isChecked,
                isEditing: doc.data().isEditing,
                isPriority: doc.data().isPriority,
                date: doc.data().date
            }
            fetchedTodos.push(todo);
        }
    });
    fetchedTodos.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    return fetchedTodos
}
export async function deletePastTodos(){
    const query = await getDocs(collection(db, "todos"));
    if (query.empty) {
        return [];
    }
    const fetchedTodos = [];
    query.forEach((doc) => {
        if(new Date(doc.data().date) < new Date()){
            deleteDoc(doc.ref);
        }
    });
    return fetchedTodos
}