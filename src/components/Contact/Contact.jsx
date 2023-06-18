import { ContactItem, Text, Button } from './styled';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactItem>
  );
};

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// }.isRequired;
