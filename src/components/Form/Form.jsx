import { useDispatch } from 'react-redux';
import { ContactsForm, FormLabel, FormText, SubmitButton } from './styled';
import { addContacts } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert('Contact already exists');
      form.elements.name.value = '';
      return;
    }

    dispatch(addContacts({ name, number }));
    form.reset();
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
        />
      </FormLabel>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </ContactsForm>
  );
}
