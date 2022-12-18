import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeDetail from './page/HomeDetail';
import Home from './page/Home';
import Nav from './component/Nav'

import './App.css';

function App() {
  return (
     <BrowserRouter>
     <Nav/>

      <Routes>  
      <Route path='/' element={<Home/>}/>
        <Route path='/coins/:id' element={<HomeDetail/>}/>
      </Routes>
     </BrowserRouter>
  );
}


export default App;
