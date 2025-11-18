// import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

// export default function AuthNav() {
//   return (
//     <div className={css.wrapper}>
//       <NavLink to="/register" className={css.link}>
//         Register
//       </NavLink>
//       <NavLink to="/login" className={css.link}>
//         Log In
//       </NavLink>
//     </div>
//   );
// }
// src/components/AuthNav/AuthNav.jsx
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const buildClassName = ({ isActive }) =>
  isActive ? `${css.link} ${css.active}` : css.link;

export default function AuthNav() {
  return (
    <div className={css.wrap}>
      <NavLink to="/register" className={buildClassName}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildClassName}>
        Log In
      </NavLink>
    </div>
  );
}
