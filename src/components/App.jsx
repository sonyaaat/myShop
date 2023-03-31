import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import MainPage from './MainPage';
import Portfolio from './Portfolio';
import Login from './Login';
import Register from './Register';
import UserInfo from './UserInfo';
import AdminPage from './AdminPage';
import Basket from './Basket';
import Add from './Add';
import Buy from './Buy';
import Item from './Item';
import background from "../images/main.jpeg"
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<MainPage/>} />
        <Route path="/portfolio" index element={<Portfolio/>} />
        <Route path="/login" index element={<Login/>} />
        <Route path="/register" index element={<Register/>} />
        <Route path="/userinfo" index element={<UserInfo/>} />
        <Route path="/adminpage" index element={<AdminPage/>} />
        <Route path="/add" index element={<Add/>} />
        <Route path="/buy" index element={<Buy/>} />
        <Route path="/item" index element={<Item/>} />
      </Routes>
      <Footer />
    </>
  );
};
