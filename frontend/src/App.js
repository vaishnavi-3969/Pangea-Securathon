import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Landing } from './pages';
import { useAuth } from "@pangeacyber/react-auth";
import Navbar from './components/Navbar';

function App() {
  const { authenticated } = useAuth();

  return (
    <div>
      <BrowserRouter>
        {authenticated && <Navbar />}
        <Routes>
          <Route path='/' element={authenticated ? <Home /> : <Landing />} exact />
          <Route path='/about' element=<About /> exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
