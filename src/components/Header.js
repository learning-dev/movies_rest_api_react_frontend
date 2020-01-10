import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Movies Inventory</h1>
       <Link style={linkStyle} to="/movies">Movies</Link> | <Link style={linkStyle} to="/directors">Directors</Link> 
    </header>
  )
}

const headerStyle = {
  background: '#0d0d0d',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
}

export default Header;
