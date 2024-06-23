import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navibar from './Pages/Navibar';
import Textform from './Pages/Textform';

function App() {
  return (
 <>
 <BrowserRouter>
 <Navibar title="TextUtils" aboutus = "About Us" />
 {/* <Navibar /> */}
 <Routes>

{/* <Route path='/home' element = {<Home/>} /> */}
<Route path='/home' element = {<Textform heading = "enter the text to analyze " />} />

 </Routes>
 
 </BrowserRouter>
 </>
  );
}

export default App;
