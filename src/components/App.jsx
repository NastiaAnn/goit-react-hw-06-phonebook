import { useState, useEffect } from 'react';
import { ContactList } from './ContactList';
import { Form } from './Form';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const formSubmitHandler = contactData => {
    const { name } = contactData;
    const isDuplicateName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (isDuplicateName) {
      alert('Contact already exists');
      return;
    } else {
      const newContact = {
        id: nanoid(),
        ...contactData,
      };
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1
        style={{
          fontSize: '35px',
          fontWeight: 800,
          marginTop: '0px',
          marginBottom: '30px',
        }}
      >
        Phonebook
      </h1>
      <Form addUserProps={formSubmitHandler} />
      <h2
        style={{
          fontSize: '35px',
          fontWeight: 800,
          marginTop: '30px',
        }}
      >
        Contacts
      </h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
}
