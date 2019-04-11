import { ADD_PERSON } from './types';

const addPerson = (person, state) => {
  const newPeople = [...state.people, person];
  return {
    ...state,
    people: newPeople
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return addPerson(action.payload, state);
    default:
      return state;
  }
};
