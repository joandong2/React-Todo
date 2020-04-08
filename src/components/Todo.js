import React from "react";
import "./Todo.css";

const Todo = (props) => {
    //console.log(props);

    const onclickHandler = (e) => {
        props.toggle(e.target.getAttribute("data-id"));
    };

    return (
        <li
            key={props.todo.id}
            data-id={props.todo.id}
            className={props.todo.completed ? "completed" : ""}
            onClick={onclickHandler}
        >
            {props.todo.task}
        </li>
    );
};

export default Todo;
