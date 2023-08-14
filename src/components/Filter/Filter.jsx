import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const filterR = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput
        type="text"
        value={filterR}
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </>
  );
};
