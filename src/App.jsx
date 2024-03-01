import './App.css';
import {TodoForm} from "./components/TodoForm";
import {useState} from "react";
import {TodoList} from "./components/TodoList";
import {v4 as V4} from "uuid";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            id: V4(),
            text,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }


  return (
    <div className="App">
        <h1>Gib deine Aufgaben ein</h1>
        <TodoForm addTodo={addTodoHandler} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
