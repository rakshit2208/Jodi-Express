import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
  <nav>
    <div className="logo">JODI <b>EXPRESS</b></div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menubar">
      <i className="fa fa-bars" />
    </label>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Why Us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </nav>
</div>

  )
}

export default Navbar
