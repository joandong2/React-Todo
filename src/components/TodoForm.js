import React from "react";
import { withFormik, Form, Field } from "formik";

class TodoForm extends React.Component {
    render() {
        return (
            <Form className="form-inline">
                <div className="form-group mb-2">
                    <Field
                        className="form-control"
                        type="text"
                        name="task"
                        placeholder="Task"
                    />
                </div>
                <button
                    type="submit"
                    name="submit"
                    className="btn btn-primary mb-2"
                >
                    Add Todo
                </button>

                {/* {props.touched.task && props.errors.task ? (
                    <p className="error">{props.errors.task}</p>
                ) : null} */}
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
    // validationSchema: Yup.object().shape({
    //     task: Yup.string()
    //         .required("Task is required.")
    //         .min(10, "Must be at least 10 characters long!"),
    // }),
    handleSubmit: (values, formikBag) => {
        formikBag.props.addTodo({
            values,
        });
        formikBag.resetForm();
    },
})(TodoForm);
