import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Reg from './Components/Reg';
import Graph from './Components/DataFromMongo/Cytoscape/GraphQLPage'
import MainMenu from './Components/DataFromMongo/main';
import Res from './api/graph'

function App() 
{ 
  return ( 
  <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/registration" element={<Reg />} />
        <Route path = "/Main" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
