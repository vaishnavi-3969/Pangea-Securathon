import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Landing } from './pages';
// import { useAuth } from "@pangeacyber/react-auth";

function App() {
  // const { authenticated} = useAuth();

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element=<Landing/> exact/>
          {/* <Route path='/' element={authenticated ? <Home /> : <Landing />} exact /> */}
          <Route path='/about' element=<About /> exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
