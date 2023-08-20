import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';

export const Navigation = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {authentificated ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </>
      )}
    </nav>
  );
};
