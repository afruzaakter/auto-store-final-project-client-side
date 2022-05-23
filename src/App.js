
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Auth/Login';
import Blogs from './Components/Pages/Blogs';
import Home from './Components/Pages/Home/Home';
import MyPortfolio from './Components/Pages/MyPortfolio';
import Navbar from './Components/Shared/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Components/Pages/Auth/SignUp';
import Reset from './Components/Pages/Auth/Reset';
import Footer from './Components/Shared/Footer';
import NotFound from './Components/Shared/NotFound';
import Purchase from './Components/Pages/Purchase/Purchase';
import RequireAuth from './Components/Pages/Auth/RequireAuth';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='blogs' element={<Blogs></Blogs>}></Route>
       <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='login' element={<Login></Login>}></Route>
       <Route path='signup' element={<SignUp></SignUp>}></Route>
       <Route path='reset' element={<Reset></Reset>}></Route>

       <Route path='/purchase' element={
       <RequireAuth>
          <Purchase></Purchase>
       </RequireAuth>

       }></Route>


       <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <ToastContainer />
    <Footer></Footer>
    
    </div>
  );
}

export default App;
