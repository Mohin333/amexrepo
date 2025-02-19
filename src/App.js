
import './App.css';

import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Weeknd from './hello';
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
      <Route path='song' element={<Weeknd/>}/>
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
