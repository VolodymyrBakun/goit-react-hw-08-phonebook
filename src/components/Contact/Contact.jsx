import PropTypes from 'prop-types';
import { DeleteBtn } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsOperations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <DeleteBtn
        type="button"
        onClick={() => dispatch(deleteContactThunk(contact.id))}
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
