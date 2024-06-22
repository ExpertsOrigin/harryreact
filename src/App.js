import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navibar from './Pages/Navibar';

function App() {
  return (
 <>
 <BrowserRouter>
 <Navibar/>
 <Routes>

<Route path='/home' element = {<Home/>} />

 </Routes>
 
 </BrowserRouter>
 </>
  );
}

export default App;
