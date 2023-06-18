import { ContactItem, Text, Button } from './styled';
import PropTypes from 'prop-types';

export const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <ContactItem>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}.isRequired;
