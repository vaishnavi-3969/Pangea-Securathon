import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Landing } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element=<Landing /> exact />
          <Route path='/home' element=<Home /> exact />
          <Route path='/about' element=<About /> exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
