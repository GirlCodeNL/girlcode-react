import React from 'react';
import logo from './images/logo-girlcode.png';
import Welcome from './Welcome';

export default function Home() {
  return (
    <div>
      <header className="home-header">
        <img src={logo} alt="GirlCode" className="logo" />
        <h1>Welcome to Girl Code</h1>
      </header>
      <div className="page-container">
        <Welcome />
      </div>
    </div>
  );
}
