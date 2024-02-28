import React from 'react'
import styles from './Todo.module.css'

export const Todo = ({todo}) => {
    return (
        <div className={styles.todo}>
            <div className={styles.todoText}>{todo}</div>
        </div>
    )
}
