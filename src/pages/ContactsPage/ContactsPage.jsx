// import ContactForm from '../../components/ContactForm/ContactForm';
// import SearchBox from '../../components/SearchBox/SearchBox';
// import ContactList from '../../components/ContactList/ContactList';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from '../../redux/contacts/operations';
// import css from './ContactsPage.module.css';

// export default function ContactsPage() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.page}>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// }
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Your contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </section>
  );
}
