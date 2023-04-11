import React, { useState } from "react";
import styled from "styled-components";
// import logoImage from '../Images/TC.png'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #ff0062;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
 
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(1) {
    margin: 0px 20px;
  }

  li:nth-child(2) {
    margin: 0px 20px;
  }

  li:nth-child(3) {
    margin: 0px 20px;
  }

  li:nth-child(4) {
    margin: 0px 20px;
  }

  li:nth-child(5) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

// const Link = styled.a`
//   color: white;
//   text-decoration: none;
  

//   :hover {
//     cursor: pointer;
//     color: sky-blue;
//   }
// `;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #ff0062;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Navbar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo> <div className="d-flex flex-row "> <h2 style={{margin:"auto",color:"#fff"}}>Jodi Express</h2></div></Logo>
        <Menu>
          <Item>
            <Link  to="/" style={{color:"white" }} className="nav-link">
             <h3>Home</h3> 
            </Link>
          </Item>
          <Item>
            <Link to="/about" style={{color:"white"}} className="nav-link">
              <h3>About</h3>
            </Link>
          </Item>
          <Item>
            <Link  to="/whyus" style={{color:"white"}} className="nav-link">
              <h3>WhyUs</h3>
            </Link>
          </Item>
          <Item>
            <Link  to="/contact" style={{color:"white"}} className="nav-link">
              <h3>Contact</h3>
            </Link>
          </Item>
          <Item>
            <Link  to="/login" style={{color:"white"}} className="nav-link">
              <h3>Login</h3>
            </Link>
          </Item>
         
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
        <Item>
            <Link  to="/" style={{color:"white"}} className="nav-link " onClick={() => toggleNav(!toggle)} >
             <h5>Home</h5> 
            </Link>
          </Item>
          <Item>
            <Link to="/about" style={{color:"white"}} className="nav-link" onClick={() => toggleNav(!toggle)} >
              <h5>About</h5>
            </Link>
          </Item>
          <Item>
            <Link  to="/whyus" style={{color:"white"}} className="nav-link" onClick={() => toggleNav(!toggle)} >
              <h5>WhyUs</h5>
            </Link>
          </Item>
          <Item>
            <Link  to="/contact" style={{color:"white"}} className="nav-link"onClick={() => toggleNav(!toggle)} >
             <h5>Contact</h5> 
            </Link>
          </Item>
          <Item>
            <Link  to="/login" style={{color:"white"}} className="nav-link" onClick={() => toggleNav(!toggle)} >
              <h5>Login</h5>
            </Link>
          </Item>
          
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;