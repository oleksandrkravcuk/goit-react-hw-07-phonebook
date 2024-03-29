import { selectVisContacts, } from '../../redux/selektor';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from '../App.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisContacts);

  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={css.text}>
              {name} : {phone}
            </p>
            <button 
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};