import React, { useState, useContext, useMemo, useRef } from 'react';
import PeopleContext from '../context/peopleContext';

const Form = () => {
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  const context = useContext(PeopleContext);

  const firstnameInput = useRef(null);

  const onChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (person.firstName.trim() === '' || person.lastName.trim() === '') return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    };

    context.addPerson(newPerson);
    setPerson({ firstName: '', lastName: '' });
    firstnameInput.current.focus();
  };
  const printNumberOfPeople = () =>
    console.log(`Number of people: ${context.people.length}`);

  useMemo(() => printNumberOfPeople(), []);

  return (
    <div className="col">
      <h2>Add a person: </h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name.."
            value={person.firstName}
            ref={firstnameInput}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name.."
            value={person.lastName}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
