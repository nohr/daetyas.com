import React from 'react'
import './App.css';
import './block.scss'
import styled from 'styled-components'
import { GlobalStyle } from './components/theme';
import { Route, Routes, NavLink } from 'react-router-dom';

const Navbar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px 0;
position: absolute;
z-index: 300;
top: 0;
width: 100%;
`

const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 30px;
padding-right: 20px;
`
// const Linker = styled(NavLink)`
// text-decoration: none;
// color: var(--main-text-color);
// `

function Nav() {
  return (
    <Navbar>
      <NavLink to="/" style={{ fontSize: "30px", paddingLeft: "20px", textDecoration: "none" }}>
        daetyas
      </NavLink>
      <Links>
        <NavLink to="/music" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>music</NavLink>
        <NavLink to="/photos" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>photos</NavLink>
        <NavLink to="/info" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>info</NavLink>
      </Links>
    </Navbar >
  )
}


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;

//PAGES
// Home with entries from both Music and Photos
function Home() {
  return (
    <div>
      Home
    </div>
  )
}

function Music() {
  const link = "https://via.placeholder.com/550/0000FF"
  return (
    <div className="grid">
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
    </div>
  )
}

function Photos() {
  const link = "https://via.placeholder.com/550/FF0000"
  return (
    <div className="grid">
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
      <div className="block">
        <img src={link} alt="placeholder" />
      </div>
    </div>
  )
}

function Info() {
  return ("info")
}