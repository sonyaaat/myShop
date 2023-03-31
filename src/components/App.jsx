import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import MainPage from './MainPage';
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<MainPage/>} />
      </Routes>
      <Footer />
    </>
  );
};
