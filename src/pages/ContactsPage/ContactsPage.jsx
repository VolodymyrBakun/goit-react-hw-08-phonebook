import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestContactsThunk } from "redux/contactsOperations";
import { selectContactsError, selectContactsIsLoading, selectUserContacts } from "redux/contactsSlice";
import { selectAuthentificated } from "redux/selectors";


const ContactsPage = () => {
    const authentificated = useSelector(selectAuthentificated);
    const isLoading = useSelector(selectContactsIsLoading);
    const error = useSelector(selectContactsError);
    const contacts = useSelector(selectUserContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authentificated) {
            return
        };
        dispatch(requestContactsThunk())
    }, [authentificated, dispatch]);

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
};

export default ContactsPage