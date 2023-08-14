import PropTypes from 'prop-types';
import { DeleteBtn } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <DeleteBtn
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </DeleteBtn>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
