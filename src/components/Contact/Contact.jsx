import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.row}>
      <div className={css.info}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
      </div>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
