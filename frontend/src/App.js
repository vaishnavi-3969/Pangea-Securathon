import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, ConfirmationPage, Home, Landing, Profile } from './pages';
import { useAuth } from "@pangeacyber/react-auth";
import Navbar from './components/Navbar';
import DoctorModule from './pages/DoctorModule';
import PatientModule from './pages/PatientModule';
import DoctorsList from './components/DoctorsList';
import DoctorProfile from './components/DoctorProfile';

function App() {
  const { authenticated } = useAuth();

  const routesPath = [
    { path: '/', element: authenticated ? <Home /> : <Landing /> },
    { path: '/about', element: <About /> },
    { path: '/profile', element: <Profile /> },
    { path: '/doctor', element: <DoctorModule /> },
    { path: '/patient', element: <PatientModule /> },
    { path: '/doctor-list', element: <DoctorsList /> },
    { path: '/doctors/book-appointment', element: <DoctorProfile />},
    { path: '/confirmation', element: <ConfirmationPage /> },
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
