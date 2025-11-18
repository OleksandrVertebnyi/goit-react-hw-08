// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';
// import css from './RegistrationPage.module.css';

// const Schema = Yup.object({
//   name: Yup.string().min(3).required('Required'),
//   email: Yup.string().email('Invalid').required('Required'),
//   password: Yup.string().min(6, 'Min 6').required('Required'),
// });

// export default function RegistrationPage() {
//   const dispatch = useDispatch();
//   const submit = (values, { resetForm }) => {
//     dispatch(register(values));
//     resetForm();
//   };
//   return (
//     <div className={css.box}>
//       <h2>Register</h2>
//       <Formik
//         initialValues={{ name: '', email: '', password: '' }}
//         validationSchema={Schema}
//         onSubmit={submit}
//       >
//         <Form className={css.form}>
//           <label>
//             Name <Field name="name" />
//           </label>
//           <label>
//             Email <Field name="email" type="email" />
//           </label>
//           <label>
//             Password <Field name="password" type="password" />
//           </label>
//           <button type="submit">Create account</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Create account</h2>
      <RegistrationForm />
    </section>
  );
}


