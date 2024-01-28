import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Brand Name</div>
      <button className="btn" onClick={getUsers}>Get Users</button>
    </nav>
  );
}

export default Navbar;
