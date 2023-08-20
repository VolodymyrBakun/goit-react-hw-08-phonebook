import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authetificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const finalUserData = {
      name,
      email,
      password,
    };
    console.log('finalUserData: ', finalUserData);

    dispatch(
      registerUserThunk({
        name,
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
      <p>Registration</p>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input name="userName" type="text" minLength={2} required />
        </label>
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

export default RegisterPage;
