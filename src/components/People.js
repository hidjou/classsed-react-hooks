import React, { useContext } from 'react';
import PeopleContext from '../context/peopleContext';

const People = () => {
  const context = useContext(PeopleContext);

  return (
    <div className="col">
      <h2>People: </h2>
      <hr />
      {context.people.map((p) => (
        <div key={Math.random() * 1000000000}>
          <p>
            {p.firstName} {p.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default People;
