import Menu from './components/Menu';
import Main from './components/Main';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Location from './components/Location';
import Characters from './components/Characters';
import Episode from './components/Episode';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/episodes" element={<Episode/>}/>
          <Route path="/locations" element={<Location/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
