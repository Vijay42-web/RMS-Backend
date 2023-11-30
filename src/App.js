
import Login from "./Pages/Login";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dst/ReactToastify.css';
import Dashboard from "./Pages/Dashboard"
import "./App.css";




function App() {
  return (
    <div className="container" >
       


     <BrowserRouter>
        <Routes>
           
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>

        </Routes>
     </BrowserRouter>
     <ToastContainer theme="colored"/>
    
    </div>
  )
}

export default App;
