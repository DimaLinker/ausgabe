import './App.css';
import {TodoForm} from "./components/TodoForm";
import {useState} from "react";
import {TodoList} from "./components/TodoList";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        setTodos([...todos, text])
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
