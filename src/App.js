import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route, Router, Routes } from 'react-router-dom';
import Logins from './Components/Logins';
import Register from './Components/Register';
import ForgetPassword from './Components/ForgetPassword';
import './sb-admin-2.min.css';
import Home from './Home';
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Logins />}/>
  <Route path='/register' element={<Register />}/>
  <Route path='/forgetpassword' element={<ForgetPassword />}/>
  <Route path="/reset/:userId" element={<ResetPassword/>}></Route>
  <Route path='/home' element={<Home />}/> 
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
