import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, selectContactsFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filterR = useSelector(selectContactsFilter);
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
