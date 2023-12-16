import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from './Component/Dashboard';
import Addpost from './Component/Addpost';
import Viewpost from './Component/Viewpost';
import Editpost from './Component/Editpost';
import Readmore from './Component/Readmore';
import Login from './Component/Login';
import Register from './Component/Register';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
       <Route path="/Login" element={<Login/>} /> 
         <Route path='/Register' element={<Register/>}/> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addpost" element={<Addpost/>} />
          <Route path="/viewpost" element={<Viewpost/>} />
          <Route path='/Editpost/:id' element={<Editpost />} />
          <Route path='/Readmore/:id' element={<Readmore />} />
          </Routes>
        <Outlet />
      </BrowserRouter>
      {/* <Addpost/> */}
   
    </>
  );
}

export default App;
