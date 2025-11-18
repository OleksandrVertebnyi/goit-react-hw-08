
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const buildClassName = ({ isActive }) =>
  isActive ? `${css.link} ${css.active}` : css.link;

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildClassName}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={buildClassName}>
        Contacts
      </NavLink>
    </nav>
  );
}
