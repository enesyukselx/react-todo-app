import React from "react";

import classes from "./App.module.css";
import Todo from "./components/Todo/Todo";

function App() {
    return (
        <React.Fragment>
            <div className={classes.App}>
                <div className={classes.title}>
                    <h2>TO DO APP</h2>
                </div>
                <Todo />
            </div>
            <div className={classes.footer}>
                <a href="https://github.com/enesyukselx">
                    https://github.com/enesyukselx
                </a>
            </div>
        </React.Fragment>
    );
}

export default App;
