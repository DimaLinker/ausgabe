import React from 'react'
import styles from './Todo.module.css'
import {FaTasks} from "react-icons/fa";
import {CgGoogleTasks} from "react-icons/cg";
import {RiDeleteBin5Line} from "react-icons/ri";

export const Todo = ({todo, deleteTodo, toggleTodo}) => {
    return (
        <div className={`${styles.todo} ${todo.completed ? styles.completedTodo : ''}`}>
            <FaTasks className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin5Line className={styles.deleteIcon}
                              onClick={() => deleteTodo(todo.id)} />
            <CgGoogleTasks className={styles.checkIcon}
                           onClick={() => toggleTodo(todo.id)} />
        </div>
    )
}
