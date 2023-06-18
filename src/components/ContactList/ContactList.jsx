import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact';
import { ContactsList } from './styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id }) => (
        <Contact name={name} number={number} id={id} key={id} />
      ))}
    </ContactsList>
  );
};
