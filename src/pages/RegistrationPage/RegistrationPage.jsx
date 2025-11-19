
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <main className={css.wrapper}>
      <h1 className={css.title}>Register</h1>
      <RegistrationForm />
    </main>
  );
}



