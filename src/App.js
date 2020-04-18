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
            todos: [
                {
                    task: "Organize Garage",
                    id: 1528817077286,
                    completed: false,
                },
                {
                    task: "Bake Cookies",
                    id: 1528817084358,
                    completed: false,
                },
                {
                    task: "Feed dinosaur",
                    id: 1528817084378,
                    completed: false,
                },
            ],
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

    filterTodos = (key) => {
        //console.log(key);
        this.setState({
            todos: this.state.todos.filter((todo) => !todo.completed),
        });
    };

    render() {
        //console.log(this.state.todos);
        return (
            <Container className="App">
                <Row>
                    <Col md="4">
                        <TodoForm addTodo={this.addHandler} />
                    </Col>
                    <Col md="12">
                        <TodoList
                            todos={this.state.todos}
                            toggleComplete={this.toggleComplete}
                            filterTodos={this.filterTodos}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
