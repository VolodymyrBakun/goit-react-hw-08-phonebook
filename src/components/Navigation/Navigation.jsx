import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';

export const Navigation = () => {
  const authentificated = useSelector(selectAuthentificated);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {authentificated ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </>
      )}
    </nav>
  );
};
