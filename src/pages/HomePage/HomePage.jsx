import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <p className={css.text}>
        Demo app: auth + private contacts using connections-api.goit.global
      </p>
    </section>
  );
}
