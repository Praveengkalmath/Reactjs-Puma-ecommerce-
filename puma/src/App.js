import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserPortal from './component/userportal';
import AdminPortal from './component/adminportal';
import Login from './component/login';
import Adminlogin from './component/Adminlogin';
import UserLogin from './component/UserLogin';
import Pagenot from './component/404';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/userlogin" element={<UserLogin/>}/>
  <Route path="/adminlogin" element={<Adminlogin/>}/>
  <Route path="/userportal/*" element={<UserPortal/>}/>
  <Route path="/adminportal/*" element={<AdminPortal/>}/>
  <Route path="*" element={<Pagenot/>}/>
  
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
