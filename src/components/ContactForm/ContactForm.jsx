import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const Schema = Yup.object({
  name: Yup.string().min(3, 'Min 3').max(50, 'Max 50').required('Required'),
  number: Yup.string().min(3, 'Min 3').max(50, 'Max 50').required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          Number
          <Field className={css.input} name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
