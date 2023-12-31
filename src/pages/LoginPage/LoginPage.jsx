import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authetificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const finalUserData = {
      email,
      password,
    };
    console.log('finalUserData: ', finalUserData);

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  if (authetificated) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <p>Log in</p>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input name="userEmail" type="email" minLength={2} required />
        </label>
        <label>
          <p>Password</p>
          <input name="userPassword" type="password" minLength={7} required />
        </label>
        <button type="submit">Sing up</button>
      </form>
    </>
  );
};

export default LoginPage;
