import React from 'react'
import Button from "../UI/Button";
import {BiReset} from "react-icons/bi";
import {MdOutlineDeleteSweep} from "react-icons/md";
import styles from './TodosActions.module.css'


export const TodosActions = ({resetTodos, deletedCompletedTodos, completedTodosCount}) => {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset All" onClick={resetTodos}>
                <BiReset />
            </Button>
            <Button title="Delete Completed" onClick={deletedCompletedTodos} disabled={!completedTodosCount}>
                <MdOutlineDeleteSweep />
            </Button>
        </div>
    )
}
