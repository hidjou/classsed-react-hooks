import React, { useReducer } from 'react';

import Form from './components/Form';
import People from './components/People';
import NewestPerson from './components/NewestPerson';

import PeopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';
import { ADD_PERSON } from './context/types';

const App = () => {
  const initialState = {
    people: [
      {
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        firstName: 'Jane',
        lastName: 'Doe'
      }
    ]
  };

  const [state, dispatch] = useReducer(peopleReducer, initialState);

  const addPerson = (person) => {
    dispatch({
      type: ADD_PERSON,
      payload: person
    });
  };

  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        addPerson
      }}
    >
      <div className="container mt-4">
        <div className="row">
          <Form />
          <People />
          <NewestPerson />
        </div>
      </div>
    </PeopleContext.Provider>
  );
};

export default App;
