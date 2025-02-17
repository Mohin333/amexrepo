
import './App.css';

import { BrowserRouter , Routes, Route} from 'react-router-dom'
import SignUp from './signup';
import MylogIn from './signin';
import Welcome from './welcome';
import Mainpage from './main';

function App() {
  return (
  
    <div className="App">
    <header>
      <h1>Netflix</h1>
    </header>
    <BrowserRouter>
      <Routes>   
      <Route path='/' element={<MylogIn/>}/>
      <Route path='up' element={<SignUp/>} /> 
      <Route path='welcome' element={<Welcome/>}/> 
      <Route path='helo' element={<Mainpage/>}/>     
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
