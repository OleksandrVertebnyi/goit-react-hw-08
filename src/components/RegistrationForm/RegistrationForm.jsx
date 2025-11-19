import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Min 7 symbols').required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = { name: '', email: '', password: '' };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="p" className={css.error} />
        </label>

        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="p" className={css.error} />
        </label>

        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage name="password" component="p" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
