import React from 'react';
import moment from 'moment';
import { AuthenticationService } from '../services/AuthenticationService';
import { UserService } from '../services/UserService';
import { Form, Formik, Field, ErrorMessage } from 'formik';

export default class TodoUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: "",
            isCompleted: "No",
        };

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        if (this.state.id == -1) return; // This is for creating a new todo task, so no need to load

        const username = window.sessionStorage.getItem("Username");

        UserService.getToDo(username, this.props.match.params.id)
            .then((response) => {this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
                isCompleted: response.data.done ? "Yes" : "No",
            })})
            .catch((error) => console.log(error.message));
    }

    handleUpdate(values) {
        const username = AuthenticationService.getUsername();
        const todo = {
            id: this.state.id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: (values.isCompleted === "Yes") ? true : false,
        };

        if (this.state.id == -1) { // Create a new todo task
            UserService.createTodo(username, todo)
                .then((response) => window.location.href="/todos")
                .catch((error) => console.log(error.message));
        } else { // Update a certain todo task
            UserService.updateTodo(username, this.state.id, todo)
                .then((response) => window.location.href="/todos")
                .catch((error) => console.log(error.message));
        }
    }

    validateForm(values) {
        let error = {};

        if (!values.description) {
            error.description = "Please Enter a Description";
        } else if (values.description.length < 5) {
            error.description = "Please Enter at Least 5 Characters";
        }

        if (!moment(values.targetDate).isValid()) {
            error.targetDate = "Please Enter a Valid Target Date";
        }

        if ((values.isCompleted != "Yes") && (values.isCompleted != "No")) {
            error.isCompleted = "Please Enter either Yes or No";
        }

        return error;
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1> Task List </h1>

                <div className="container">
                    <Formik
                        initialValues={{description: this.state.description, targetDate: this.state.targetDate, isCompleted: this.state.isCompleted}}
                        onSubmit={this.handleUpdate}
                        validate={this.validateForm}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                    > 
                        {(props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="isCompleted" component="div" className="alert alert-warning"/>

                                <fieldset className="form-group">
                                    <label> Description </label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Target Date </label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Is Completed </label>
                                    <Field className="form-control" as="select" type="text" name="isCompleted">
                                        <option value="Yes"> Yes </option>
                                        <option value="No"> No </option>
                                    </Field>
                                </fieldset>
                                
                                <button className="btn btn-success" type="submit"> Save </button>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        );        
    }

};