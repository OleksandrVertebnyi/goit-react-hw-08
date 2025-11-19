
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={css.wrapper}>
      <h1 className={css.title}>Log in</h1>
      <LoginForm />
    </main>
  );
}
