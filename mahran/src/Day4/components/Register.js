import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validate = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "* Required";
  }
  if (!values.email) {
    errors.email = "* Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.lastName) {
    errors.lastName = "* Required";
  }
  return errors;
};

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const Register = () => (
  <div>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
        <div className="container">
          <h1>Register Form</h1>
          <label htmlFor="firstName">First Name</label>
          <Field className="form-control" name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field className="form-control" name="lastName" type="text" />
          <ErrorMessage name="lastName" />
          <label htmlFor="email">Email Address</label>
          <Field className="form-control" name="email" type="email" />
          <ErrorMessage name="email" />
          <br />
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default Register;
