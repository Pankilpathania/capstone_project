import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Main from './pages/Main';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Booking from './components/Booking/Booking';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: 'Markazi Text, serif',
      body: 'Karla, sans-serif',
    },
  }
  );

  return (
    <>
      <ChakraProvider theme={theme}>
          <Header></Header>
          <Box as="main">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservation" element={<Reservation  />} />
              <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
              <Route path="/orderonline" element={<OrderOnline />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Box>
          <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
