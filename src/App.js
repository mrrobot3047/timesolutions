import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Loginpages from './pages/Loginpages';
import Countries from './pages/Countries';
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpages/>}/>
        <Route path="/countries" element={<Countries/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
