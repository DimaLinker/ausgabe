import React, {useState} from 'react'
import styles from './TodoForm.module.css'

console.log(styles)

export const TodoForm = ({addTodo}) => {
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
                <button onSubmit="submit" >Submit</button>
            </form>
        </div>
    )
}
