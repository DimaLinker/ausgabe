import React, {useState} from 'react'
import styles from './TodoForm.module.css'
import Button from "../UI/Button";

console.log(styles)

export const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');


    const onSubmithandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmithandler}>
                <input type="text"
                       placeholder="Text eingeben...."
                       value={text} onChange={(e) => setText(e.target.value)}/>
                <Button title="Add Todo" type="submit">Submit</Button>
            </form>
        </div>
    )
}
