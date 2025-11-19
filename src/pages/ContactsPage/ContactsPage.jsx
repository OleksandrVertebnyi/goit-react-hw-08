
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <main className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </main>
  );
}
