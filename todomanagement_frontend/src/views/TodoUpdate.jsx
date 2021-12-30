import React from 'react';
import moment from 'moment';
import { Form, Formik, Field, ErrorMessage } from 'formik';

export default class TodoUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            description: "asdf",
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
        };
    }

    handleUpdate(values) {
        console.log(values);
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