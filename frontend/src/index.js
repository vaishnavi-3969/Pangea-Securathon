import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from '@pangeacyber/react-auth';
import { REACT_APP_CLIENT_TOKEN, REACT_APP_PANGEA_DOMAIN, REACT_APP_LOGIN_URL } from './components/secret';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      config={{
        domain: REACT_APP_PANGEA_DOMAIN,
        clientToken: REACT_APP_CLIENT_TOKEN,
        useJwt: false
      }}
      cookieOptions={{
        useCookie: true,
        cookieName: "pangea-authn"
      }}
      loginUrl={REACT_APP_LOGIN_URL}
      useStrictStateCheck={false}
    >

      <App />
    </AuthProvider>
  </React.StrictMode>
)

