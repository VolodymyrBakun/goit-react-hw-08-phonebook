import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContactsFilter, selectUserContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectUserContacts) ?? [];
  console.log('contacts: ', contacts);
  const toFilter = useSelector(selectContactsFilter);

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
        {contacts ? (
          contactsData.map(contact => {
            return <Contact contact={contact} key={contact.id} />;
          })
        ) : (
          <p>No contacts</p>
        )}
      </List>
    </>
  );
};
