import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <div className={css.wrapper}>
      <span className={css.text}>Welcome, {email}</span>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
