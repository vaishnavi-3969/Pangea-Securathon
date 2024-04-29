import React from 'react'
import { useAuth } from "@pangeacyber/react-auth";

const Home = () => {
  const { authenticated, user, login, logout } = useAuth();

  return (
    <header className="App-header">
        <h1 >Login with Passkeys 🔑</h1>
        <p>
          {/* Check if user is authenticated */}
          {authenticated ?
            <p>
              Welcome, {user.email}!
              <br />
              <button style={{
                background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
              }}
                onClick={logout}>Logout</button>
            </p>
            :
            <button style={{
              background: 'linear-gradient(to right, #416cff, #4b2bff)',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            }}
              onClick={login}>Login</button>
          }
        </p>
        <a
          className="App-link"
          href="https://pangea.cloud/services/authn/?utm_source=blog&utm_medium=passkeys-snippet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Pangea AuthN for free today!
        </a>
      </header>
  )
}

export default Home