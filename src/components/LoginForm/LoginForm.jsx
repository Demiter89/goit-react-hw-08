import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Email:
          <Field type="email" name="email" required />
        </label>
        <label className={css.label}>
          Password:
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;