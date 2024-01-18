import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';

import './App.module.css';
import '../redux/store';

import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {selectContacts, selectError, selectIsLoading, } from '../redux/selektor';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>☎ Phonebook</h1>
      <FormContact />
      <h2>Contacts list</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <h2>☹ Your phonebook is empty. Add first contact!</h2>
      )}
    </>
  );
};