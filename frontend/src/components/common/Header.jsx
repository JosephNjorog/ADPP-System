import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.png" alt="Logo" />
          <span>Disease Outbreak Predictor</span>
        </Link>
        <nav>
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/data">Data</Link>
              <Link to="/predictions">Predictions</Link>
              <Link to="/alerts">Alerts</Link>
              <button onClick={logout} className="btn btn-primary">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;