// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact';
import { ContactsList } from './styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  console.log(contacts);

  //   const visibleContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <Contact name={name} number={number} id={id} key={id} />
      ))}
    </ContactsList>
  );
};

// const contactsShape = PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// }).isRequired;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(contactsShape).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
