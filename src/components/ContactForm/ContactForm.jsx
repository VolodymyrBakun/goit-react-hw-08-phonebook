import { useState } from 'react';
import { Form, Name, Number, SubmitBtn } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contactsOperations';
import { selectUserContacts } from 'redux/contactsSlice';
// import { addContact } from 'redux/contactsSlice';
// import { nanoid } from 'nanoid';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      // id: nanoid(),
      name,
      number,
    };
    dispatch(addContactThunk({name,number}));

    setName('');
    setNumber('');
  };

  return (
    
    <Form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <Name
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <Number
        id="number"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
}
