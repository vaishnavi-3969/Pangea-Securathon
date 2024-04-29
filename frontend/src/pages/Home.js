import React from 'react'
import { useAuth } from "@pangeacyber/react-auth";

const Home = () => {
  const { authenticated, user, login, logout } = useAuth();

  return (
    <header >

      <p>
        Welcome, {user.email}!
        <br />
      
      </p>
    </header>
  )
}

export default Home