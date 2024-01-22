import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Form from './Component/Form';
import View from './Component/View';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
