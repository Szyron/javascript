import AutokList from "./components/AutokList"
import UjAuto from "./components/UjAuto"
import Main from "./components/Main"
import Menu from "./components/Menu"
import ModAuto from "./components/ModAuto"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

function App() {
  

  return (
   <div>
     <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/autok" element={<AutokList/>}/>
          <Route path="/ujauto" element={<ModAuto/>}/>
          <Route path="/modauto" element={<ModAuto/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
