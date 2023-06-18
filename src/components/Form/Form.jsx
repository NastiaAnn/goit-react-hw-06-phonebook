import { useState } from 'react';
import { ContactsForm, FormLabel, FormText, SubmitButton } from './styled';
import PropTypes from 'prop-types';

export function Form({ addUserProps }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    addUserProps({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <ContactsForm onSubmit={handleFormSubmit}>
      <FormLabel>
        Name
        <FormText
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormText
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </FormLabel>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </ContactsForm>
  );
}

Form.propTypes = {
  addUserProps: PropTypes.func.isRequired,
};
