import React from 'react'
import './App.css';
import './block.scss'
import styled from 'styled-components'
import { GlobalStyle } from './components/theme';
import { Route, Routes, Link } from 'react-router-dom';

const Navbar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 20px 0;
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

const Home = styled.p`
font-size: 30px;
padding-left: 20px;
`

function Nav() {
  return (
    <Navbar>
      <Link to="/" style={{ fontSize: "30px", paddingLeft: "20px" }}>
        daetyas
      </Link>
      <Links>
        <Link to="/music">music</Link>
        <Link to="/photos">photos</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
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
        <Route path="/" element={<Mixed />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

//PAGES
// Home with entries from both Music and Photos
function Mixed() {
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

function About() {
  return ("about")
}

function Contact() {
  return ("contact")
}