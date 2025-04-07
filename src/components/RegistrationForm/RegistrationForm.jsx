import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Name:
          <Field type="text" name="name" required />
        </label>
        <label className={css.label}>
          Email:
          <Field type="email" name="email" required />
        </label>
        <label className={css.label}>
          Password:
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;