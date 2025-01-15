import { KutyaProvider } from "./context/KutyaContext";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Main from "./components/Main";
import Menu from "./components/Menu";
import Kutyak from "./components/Kutyak";
import Kutyafajtak from "./components/Kutyafajtak";
import Kutyanevek from "./components/Kutyanevek";
import KutyafajtaForm from "./components/KutyafajtaForm";


function App() {
  

  return (
   <div>
     <KutyaProvider>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/kutyak" element={<Kutyak/>}></Route>
            <Route path="/kutyafajtak" element={<Kutyafajtak/>}></Route>
            <Route path="/kutyanevek" element={<Kutyanevek/>}></Route>
            <Route path="/ujkutyafajta" element={<KutyafajtaForm/>}></Route>
            <Route path="*" element={<Navigate to="/"/>}></Route>
          </Routes>
        </BrowserRouter>
     </KutyaProvider>
   </div>
  )
}

export default App
