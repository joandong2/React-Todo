import React from "react";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

import { Container, Row, Col } from "reactstrap";

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

    toggleComplete = (itemID) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === Number(itemID)) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }

                return todo;
            }),
        });
    };

    filterTodos = () => {
        this.setState({
            todos: this.state.todos.filter((todo) => !todo.completed),
        });
    };

    render() {
        //console.log(this.state.todos);
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <TodoForm addTodo={this.addHandler} />
                        <button onClick={this.filterTodos}>
                            Clear Completed
                        </button>
                    </Col>
                    <Col md="12">
                        <TodoList
                            todos={this.state.todos}
                            toggleComplete={this.toggleComplete}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
