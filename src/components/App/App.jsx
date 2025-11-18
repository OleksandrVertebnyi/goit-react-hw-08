// import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Layout from '../Layout/Layout';
// import HomePage from '../../pages/HomePage/HomePage';
// import LoginPage from '../../pages/LoginPage/LoginPage';
// import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
// import ContactsPage from '../../pages/ContactsPage/ContactsPage';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
// import { refreshUser } from '../../redux/auth/operations';
// import { selectIsRefreshing } from '../../redux/auth/selectors';

// export default function App() {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   if (isRefreshing) {
//     return <p>Refreshing user...</p>;
//   }

//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />

//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/contacts"
//               component={<RegistrationPage />}
//             />
//           }
//         />

//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//           }
//         />

//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//           }
//         />
//       </Routes>
//     </Layout>
//   );
// }
// src/components/App/App.jsx
// src/components/App/App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={RegistrationPage}   // <--- без JSX
            />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={LoginPage}          // <--- без JSX
            />
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={ContactsPage}       // <--- без JSX
            />
          }
        />
      </Route>
    </Routes>
  );
}
