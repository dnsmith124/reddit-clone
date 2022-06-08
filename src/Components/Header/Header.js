import React from "react";
import { Link } from 'react-router-dom';

const Header = ({children}) => {

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className='left'>
            <h5>Logo Here</h5>
          </div>
          <div className='right'>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      {children}
    </header>
  );
}

export default Header;