import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export function App() {
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
      <Form />
      <h2
        style={{
          fontSize: '35px',
          fontWeight: 800,
          marginTop: '30px',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
}
