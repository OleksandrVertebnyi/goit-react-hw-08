// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

// export default function RestrictedRoute({ children }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
// }
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function RestrictedRoute({
  component,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
