import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.list}>
      {contacts.map(c => (
        <li key={c.id} className={css.item}>
          <Contact contact={c} />
        </li>
      ))}
    </ul>
  );
}
