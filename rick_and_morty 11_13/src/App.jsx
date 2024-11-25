import Menu from './components/Menu';
import Main from './components/Main';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'; //beimportalas
import Locations from './components/Locations';
import Characters from './components/Characters';
import Episodes from './components/Episodes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
          <Route path="/locations" element={<Locations/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
