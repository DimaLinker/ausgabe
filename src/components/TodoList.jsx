import React from 'react'
import {Todo} from "./Todo";
import styles from './TodoList.module.css'

export const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length &&  <h2>Sie haben noch keine Aufgaben.....</h2>}
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            ))}
        </div>
    )
}
