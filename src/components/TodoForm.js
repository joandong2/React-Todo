import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup"; // for everything

class TodoForm extends React.Component {
    render() {
        return (
            <Form className="form-inline">
                <div className="form-group mb-2">
                    <Field
                        className="form-control"
                        type="text"
                        name="task"
                        placeholder="task"
                    />
                </div>
                <button
                    type="submit"
                    name="submit"
                    className="btn btn-success mb-2"
                >
                    add todo
                </button>
                {this.props.touched.task && this.props.errors.task ? (
                    <p className="error">{this.props.errors.task}</p>
                ) : null}
            </Form>
        );
    }
}

export default withFormik({
    mapPropsToValues: (props) => {
        return {
            task: props.task || "",
        };
    },
    validationSchema: Yup.object().shape({
        task: Yup.string()
            .required("Task is required.")
            .min(10, "Must be at least 10 characters long!"),
    }),
    handleSubmit: (values, formikBag) => {
        formikBag.props.addTodo({
            values,
        });
        formikBag.resetForm();
    },
})(TodoForm);
