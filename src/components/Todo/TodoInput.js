import React, { useRef } from "react";

import classes from "./TodoInput.module.css";

const TodoInput = (props) => {
    const inputRef = useRef();

    const createTodo = () => {
        if (inputRef.current.value.trim().length > 0) {
            const todo = {
                id: Math.random().toString(),
                text: inputRef.current.value,
            };
            props.addTodo(todo);
            inputRef.current.value = "";
        }
    };

    return (
        <div className={classes.todoInput}>
            <div className={classes.input}>
                <input placeholder="some text..." type="text" ref={inputRef} />
            </div>
            <div className={classes.button}>
                <button onClick={createTodo}>ADD</button>
            </div>
        </div>
    );
};

export default TodoInput;
