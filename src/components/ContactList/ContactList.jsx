import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const toFilter = useSelector(state => state.contacts.filter);

  const contactsToRender = () => {
    const normalizedFilter = toFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsData = contactsToRender();

  return (
    <>
      <List>
        {contactsData.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </List>
    </>
  );
};
