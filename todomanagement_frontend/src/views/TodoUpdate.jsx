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
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
        };
    }

    componentDidMount() {
        const username = window.sessionStorage.getItem("Username");

        UserService.getToDo(username, this.props.match.params.id)
            .then((response) => {this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
            })})
            .catch((error) => console.log(error.message));
    }

    handleUpdate(values) {
        const username = AuthenticationService.getUsername();

        UserService.updateTodo(username, )
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

        return error;
    }

    render() {
        return (
            <div>
                <h1> Update Task </h1>

                <div className="container">
                    <Formik
                        initialValues={{description: this.state.description, targetDate: this.state.targetDate}}
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

                                <fieldset className="form-group">
                                    <label> Description </label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Target Date </label>
                                    <Field className="form-control" type="date" name="targetDate"/>
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