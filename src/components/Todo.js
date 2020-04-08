import React from "react";

const Todo = (props) => {
    //console.log(props);

    const onclickHandler = (e) => {
        props.toggle(e.target.getAttribute("data-id"));
    };

    return (
        <td
            key={props.todo.id}
            data-id={props.todo.id}
            className={props.todo.completed ? "completed" : ""}
            onClick={onclickHandler}
        >
            {props.todo.task}
        </td>
    );
};

export default Todo;
