import React from 'react'
import './App.css'
import './block.scss'
import styled from 'styled-components'
import { GlobalStyle } from './components/theme'
import { Route, Routes, NavLink } from 'react-router-dom'
import bau from './bauhaus.png'
import louis from './louis.jpg'
import { Page, Related } from './components/page'

// Styling
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  z-index: 300;
  top: 0;
  width: 100%;
  height: 35px;
  border-bottom: solid 1px;
  background-color: var(--main-bg-color);

  & .home{
    line-height: 10px;
    font-size: 30px;
    border-right: solid 1px;
    border-color: transparent var(--main-text-color) transparent var(--main-text-color);
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & .home:hover{
    background-color: var(--main-text-color);
    color: var(--main-bg-color);
    transition: var(--transition);
  }
`
const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  
  & a{
    border-left: solid 1px;
    height: 100%;
    width: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & a:hover{
    background-color: var(--main-text-color);
    color: var(--main-bg-color);
    transition: var(--transition);
  }
`

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - calc(var(--margin)*2));
  border-color: transparent var(--main-text-color) transparent var(--main-text-color);
`

const Footer = styled.a`
  height: var(--margin);
  bottom: 0;
  position: fixed;
  z-index: 10;
  text-align: center;
  background-color: var(--main-bg-color);
  width: 100%;
  margin 0 auto;
  border-top: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover{
    background-color: var(--main-text-color);
    color: var(--main-bg-color);
    transition: var(--transition);
  }
`

function Nav() {
  return (
    <Navbar>
      <NavLink to="/" style={{
      }} className="home">
        daetyas
      </NavLink>
      <Links>
        <NavLink to="/music" style={({ isActive }) => ({ backgroundColor: isActive ? "var(--main-text-color)" : null, color: isActive ? "var(--main-bg-color)" : null })}>music</NavLink>
        <NavLink to="/photos" style={({ isActive }) => ({ backgroundColor: isActive ? "var(--main-text-color)" : null, color: isActive ? "var(--main-bg-color)" : null })}>photos</NavLink>
        <NavLink to="/info" style={({ isActive }) => ({ backgroundColor: isActive ? "var(--main-text-color)" : null, color: isActive ? "var(--main-bg-color)" : null })}>info</NavLink>
      </Links>
    </Navbar>
  )
}

//PAGES
function Home() {
  // Get entries from both Music and Photos
  return (
    <Container>
      <div>
        Home
      </div>
    </Container>
  )
}

function Music() {
  const link = bau;
  return (
    <Container>
      <Page />
      <Related />
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
    </Container>
  )
}

function Photos() {
  const link = louis;
  return (
    <Container>
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
    </Container>
  )
}

function Info() {
  return (
    <Container>
      <div> Info </div>
    </Container >
  )
}

// Final Output
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
      <Footer href='mailto:daetyas@daetyas.com'>daetyas@daetyas.com</Footer>
    </div>
  );
}

export default App;