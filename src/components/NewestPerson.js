import React, { useEffect } from 'react';

const NewestPerson = ({ newestPerson }) => {
  useEffect(() => {
    const newestPersonName = `${newestPerson.firstName} ${
      newestPerson.lastName
    }`;
    document.title = newestPersonName;
    console.log('useEffect');
    return () => {
      console.log('Unmounted');
    };
  }, [newestPerson]);
  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Newest Person: {`${newestPerson.firstName} ${newestPerson.lastName}`}
      </h2>
    </div>
  );
};

export default NewestPerson;
