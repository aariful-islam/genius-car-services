import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/Home/LogIn/LogIn/LogIn';
import Registration from './Pages/Home/LogIn/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route 
        path='/booking'
        element={
          <RequireAuth>
             <Booking></Booking>

          </RequireAuth>
         
           
         
        }

        ></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
