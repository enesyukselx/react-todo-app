import React, { useState } from "react";

import classes from "./Todo.module.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todo = (props) => {
    let allTodos = [];
    if (localStorage.getItem("todo")) {
        allTodos = [...JSON.parse(localStorage.getItem("todo"))];
    }

    const [todos, setTodos] = useState([...allTodos]);

    const deleteHandler = (id) => {
        setTodos(() => {
            const updatedTodos = todos.filter((todo) => todo.id !== id);
            localStorage.setItem("todo", JSON.stringify([...updatedTodos]));
            return [...updatedTodos];
        });
    };

    const addHandler = (todo) => {
        setTodos((prevTodos) => {
            localStorage.setItem("todo", JSON.stringify([...prevTodos, todo]));
            return [...prevTodos, todo];
        });
    };

    const updateHandler = (id, text) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos];
            updatedTodos[todoIndex].text = text;
            localStorage.setItem("todo", JSON.stringify([...prevTodos]));
            return [...updatedTodos];
        });
    };

    return (
        <div className={classes.todo}>
            {todos.map((todo) => (
                <TodoItem
                    id={todo.id}
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteHandler}
                    updateTodo={updateHandler}
                />
            ))}
            <TodoInput addTodo={addHandler} />
        </div>
    );
};

export default Todo;
