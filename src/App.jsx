import './App.css';
import {TodoForm} from "./components/Todos/TodoForm";
import {useState} from "react";
import {TodoList} from "./components/Todos/TodoList";
import {v4 as V4} from "uuid";
import {TodosActions} from "./components/Todos/TodosActions";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            completed: false,
            id: V4(),
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter( todo => todo.id !== id))
    }

    const toggleTodoHandler = (id) => {
        setTodos(todos.map(todo => {
           return todo.id === id
               ? {...todo, completed: !todo.completed}
               : {...todo}
        }))
    }

    const resetTodosHandler = () => {
        setTodos([])
    }
    const deletedCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.completed))
    }

  return (
    <div className="App">
        <h1>Gib deine Aufgaben ein</h1>
        <TodoForm
            addTodo={addTodoHandler} />
        <TodosActions resetTodos={resetTodosHandler}
                      deletedCompletedTodos={deletedCompletedTodosHandler}/>
        <TodoList todos={todos}
                  deleteTodo={deleteTodoHandler}
                  toggleTodo={toggleTodoHandler}/>
    </div>
  );
}

export default App;
