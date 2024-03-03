import React from 'react'
import Button from "../UI/Button";
import {BiReset} from "react-icons/bi";
import {MdOutlineDeleteSweep} from "react-icons/md";


export const TodosActions = ({resetTodos, deletedCompletedTodos}) => {
    return (
        <div>
            <Button title="Reset All" onClick={resetTodos}>
                <BiReset />
            </Button>
            <Button title="Delete Completed" onClick={deletedCompletedTodos}>
                <MdOutlineDeleteSweep />
            </Button>
        </div>
    )
}
