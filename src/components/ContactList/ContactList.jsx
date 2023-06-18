import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';
import { ContactsList } from './styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <Contact
          name={name}
          number={number}
          id={id}
          key={id}
          deleteContact={deleteContact}
        />
      ))}
    </ContactsList>
  );
};

const contactsShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(contactsShape).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
