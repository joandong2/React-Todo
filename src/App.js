import React from "react";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }

    addHandler = (e) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    task: e.values.task,
                    id: Date.now(),
                    completed: false,
                },
            ],
        });
    };

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoList todos={this.state.todos} />
                <TodoForm addTodo={this.addHandler} />
            </div>
        );
    }
}

export default App;
