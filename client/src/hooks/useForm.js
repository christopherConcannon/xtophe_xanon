import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const resetForm = () => {
    for (let key in values) {
      values[key] = ''
    }
    setValues(values)
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm
  }
};

export default useForm;

// https://upmostly.com/tutorials/form-validation-using-custom-react-hooks