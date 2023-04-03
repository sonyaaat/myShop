import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import MainPage from './MainPage';
import Portfolio from './Portfolio';
import Login from './Login';
import Register from './Register';
import UserInfo from './UserInfo';
import AdminPage from './AdminPage';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import Basket from './Basket';
import { refreshUser } from 'redux/auth/auth-operations';
import Add from './Add';
import Buy from './Buy';
import Item from './Item';
import { selectIsRefreshing } from '../redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
     <ToastContainer />
      {! isRefreshing &&
     <>
      <Header />
      <Routes>
        <Route path="/" index element={<MainPage/>} />
        <Route path="/portfolio" index element={<Portfolio/>} />
        <Route path="/login" index element={<RestrictedRoute restricted component={<Login/>}/>} />
        <Route path="/register" index element={ <RestrictedRoute restricted component={<Register/>}/>} />
        <Route path="/userinfo" index element={<PrivateRoute component={<UserInfo/>}/>} />
        <Route path="/adminpage" index element={<PrivateRoute component={<AdminPage/>}/>} />
        <Route path="/add" index element={<PrivateRoute component={<Add/>}/>} />
        <Route path="/buy/:id" index element={<PrivateRoute component={<Buy/>}/>} />
        <Route path="/basket" index element={<PrivateRoute component={<Basket/>}/>} />
        <Route path="/item/:id" index element={<Item/>} />
      </Routes>
      <Footer /></>}
    </>
  );
};
