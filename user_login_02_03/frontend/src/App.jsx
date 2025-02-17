import Login from  "./components/Login";
import Register from  "./components/Register";
import Main from  "./components/Main";
import Menu from  "./components/Menu";
import { UserProvider } from "./context/UserContext";
import Vedett from "./components/Vedett";

import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

function App() {
  

  return (
   <div>
    <UserProvider>
     <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/vedett" element={<Vedett/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Navigate t="/"/>}/>
        </Routes>
     </BrowserRouter>
     </UserProvider>
   </div>
  )
}

export default App
