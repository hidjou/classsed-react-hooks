import React, { useContext, useRef } from 'react';
import PeopleContext from '../context/peopleContext';

import { useForm } from '../hooks';

const Form = () => {
  const context = useContext(PeopleContext);

  const firstnameInput = useRef(null);

  const validatePersonForm = (values) => {
    let errors = {};
    if (values.firstName.trim() === '') {
      errors.firstName = 'First name must not be empty';
    }
    if (values.lastName.trim() === '') {
      errors.lastName = 'Last name must not be empty';
    }
    return errors;
  };

  const addPersonFromForm = () => {
    context.addPerson(values);
    firstnameInput.current.focus();
  };

  const { values, errors, onChange, onSubmit } = useForm(
    addPersonFromForm,
    { firstName: '', lastName: '' },
    validatePersonForm
  );

  return (
    <div className="col">
      <h2>Add a person: </h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors.firstName && 'is-invalid'}`}
            name="firstName"
            placeholder="First Name.."
            value={values.firstName}
            ref={firstnameInput}
            onChange={onChange}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors.lastName && 'is-invalid'}`}
            name="lastName"
            placeholder="Last Name.."
            value={values.lastName}
            onChange={onChange}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
