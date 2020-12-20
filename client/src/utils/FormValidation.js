export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 3) {
    errors.name = 'Name must be 3 or more characters';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 3) {
    errors.message = 'Message must be 3 or more characters';
  }
  return errors;
};