import { useState } from 'react';

export const useForm = (callback, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(validate(values)).length === 0) {
      callback();
      setValues(initialState);
      setErrors({});
    } else {
      setErrors(validate(values));
    }
  };

  return {
    onChange,
    onSubmit,
    errors,
    values
  };
};
