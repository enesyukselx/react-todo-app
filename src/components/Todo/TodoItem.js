import React, { useState, useRef } from "react";

import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef();

    const editStatusHandler = () => {
        if (isEdit) {
            if (inputRef.current.value.trim().length > 0) {
                props.updateTodo(props.todo.id, inputRef.current.value);
            }
            setIsEdit(false);
        } else {
            inputRef.current.value = props.todo.text;
            setIsEdit(true);
        }
    };

    return (
        <div className={classes.item}>
            <div className={classes.left}>
                {!isEdit && (
                    <span onDoubleClick={editStatusHandler}>
                        {props.todo.text}
                    </span>
                )}
                <input
                    type="text"
                    ref={inputRef}
                    className={classes.updateInput}
                    style={{
                        visibility: isEdit ? "visible" : "hidden",
                        display: isEdit ? "block" : "none",
                    }}
                />
            </div>
            <div className={classes.right}>
                <button
                    className={`${classes.editBtn} ${classes.btn}`}
                    onClick={editStatusHandler}
                >
                    {!isEdit ? "EDIT" : "UPDATE"}
                </button>
                <button
                    className={`${classes.deleteBtn} ${classes.btn}`}
                    onClick={() => {
                        props.deleteTodo(props.todo.id);
                    }}
                >
                    DELETE
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
