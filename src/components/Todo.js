import React from "react";

const Todo = (props) => {
    console.log(props);

    return <li key={props.todo.id}>{props.todo.task}</li>;
};

export default Todo;
