import { logoutUserThunk } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <p>{email.email}</p>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};
