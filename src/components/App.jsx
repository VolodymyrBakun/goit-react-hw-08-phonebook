import { Suspense, useEffect } from 'react';
import { Container } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { UserMenu } from './UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import  PrivatRoute  from './PrivatRoute/PrivatRoute';


export function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated)

  useEffect(() => {
  if (!token || authentificated) return
    
dispatch(refreshUserThunk())
},[token, authentificated, dispatch])

  return (
    <Container>
      <Navigation />
      {authentificated && <UserMenu />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<PrivatRoute redirectTo="/login"> <ContactsPage /> </PrivatRoute> } />
        </Routes>
      </Suspense>
    </Container>
  );
}
