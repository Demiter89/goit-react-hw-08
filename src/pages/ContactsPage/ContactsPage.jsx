// src/pages/ContactsPage/ContactsPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

// Додай імпорти ContactForm і Filter
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Phonebook</h1>

      {/* Форма додавання контакту */}
      <ContactForm />

      <h2>Contacts</h2>

      {/* Інпут для фільтрації */}
      <Filter />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;