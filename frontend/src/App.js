import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Landing, Profile } from './pages';
import { useAuth } from "@pangeacyber/react-auth";
import Navbar from './components/Navbar';

function App() {
  const { authenticated } = useAuth();

  const routesPath = [
    { path: '/', element: authenticated ? <Home /> : <Landing /> },
    { path: '/about', element: <About /> },
    { path: '/profile', element: <Profile /> },

  ];

  return (
    <div>
      <BrowserRouter>
        {authenticated && <Navbar />}
        <Routes>
          {routesPath.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
