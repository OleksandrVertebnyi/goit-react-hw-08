// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/auth/operations';
// import css from './LoginPage.module.css';

// const Schema = Yup.object({
//   email: Yup.string().email('Invalid').required('Required'),
//   password: Yup.string().min(6, 'Min 6').required('Required'),
// });

// export default function LoginPage() {
//   const dispatch = useDispatch();
//   const submit = (values, { resetForm }) => {
//     dispatch(login(values));
//     resetForm();
//   };
//   return (
//     <div className={css.box}>
//       <h2>Log In</h2>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validationSchema={Schema}
//         onSubmit={submit}
//       >
//         <Form className={css.form}>
//           <label>
//             Email <Field name="email" type="email" />
//           </label>
//           <label>
//             Password <Field name="password" type="password" />
//           </label>
//           <button type="submit">Log In</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Log in</h2>
      <LoginForm />
    </section>
  );
}
