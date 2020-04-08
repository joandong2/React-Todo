// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";

import { Table, Row, Col, Button } from "reactstrap";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            key: "",
        };
    }

    changeHandler = (e) => {
        this.setState({
            key: e.target.value,
        });
    };

    render() {
        console.log(this.state.key);
        return (
            <div className="results">
                <Row className="add-ons">
                    <Col md="4">
                        <input
                            className="form-control"
                            type="text"
                            name="search"
                            placeholder="search task.."
                            onChange={this.changeHandler}
                            value={this.state.key}
                        />
                    </Col>
                    <Col>
                        <Button
                            color="danger"
                            onClick={this.props.filterTodos}
                            size="sm"
                        >
                            Clear Completed
                        </Button>
                    </Col>
                </Row>

                <Table hover>
                    <thead>
                        <tr>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map(
                            (todo) =>
                                todo.task
                                    .toLowerCase()
                                    .includes(this.state.key) && (
                                    <tr key={todo.id}>
                                        <Todo
                                            key={todo.id}
                                            todo={todo}
                                            toggle={this.props.toggleComplete}
                                        />
                                    </tr>
                                )
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TodoList;
