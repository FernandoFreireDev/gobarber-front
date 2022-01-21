import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

const getValidationErrors = (errors: ValidationError): Errors => {
  const validationErrors: Errors = {};

  errors.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
};

export default getValidationErrors;
