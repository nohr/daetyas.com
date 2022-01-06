import React, { useEffect, useRef } from 'react'
import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './components/theme'
import { Route, Routes, NavLink } from 'react-router-dom'
import { Page } from './components/page'
import { state } from './components/state'
import { useSnapshot } from 'valtio'
import { db, GetContent } from './firebase'

// STYLING
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 300;
  top: 0;
  width: calc(100vw - calc(var(--margin)*2));
  height: var(--margin);
  background-color: var(--main-bg-color);

  & .home{
    border-top: solid var(--border-weight);
    border-bottom: solid var(--border-weight);
    border-color: var(--main-text-color);
    width: 66.67%;
    line-height: 10px;
    font-size: 30px;
    /* border-right: solid var(--border-weight);
    border-color: var(--main-text-color); */
    padding: 0 20px;
    padding-bottom: 6px;
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
    border-color: var(--main-hover-color);
    background-color: var(--main-hover-color);
    color: var(--main-bg-color);
    transition: var(--transition);
  -webkit-transition: var(--transition);
  -moz-transition: var(--transition);
  -o-transition: var(--transition);
  }
`
const Links = styled.div`
  width: 33.33%;
  cursor: pointer;
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
    border-bottom: solid var(--border-weight) var(--main-text-color);
    border-top: solid var(--border-weight) var(--main-text-color);
    border-left: solid var(--border-weight) var(--main-text-color);
    height: 100%;
    width: inherit;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & a:hover{
    border-right: solid var(--border-weight) var(--main-text-color);
    border-color: var(--main-hover-color);
    background-color: var(--main-hover-color);
    color: var(--main-bg-color);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -o-transition: var(--transition);
  }
`
const Container = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: flex-start;
  margin-top: var(--margin);
  border-left: solid var(--border-weight);
  border-right: solid var(--border-weight);
  width: 100%;
  height: 100%;
  font-size: 0;
`
const Grid = styled.div`
  columns: 3 200px;
  column-gap: 0;
  column-rule: none;
  -webkit-columns: 3 200px;
  -webkit-column-gap: 0;
  outline: solid var(--border-weight);

  .active{
    opacity: 10%;
    cursor: default;
  }

  .block {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0;
    outline: var(--main-text-color) var(--border-weight) solid;

    p {
      opacity: 1 !important;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      margin: 20px;
    }

    img {
      display: block;
      object-fit: cover;
      width: auto;
      min-width: 101% !important;
      min-height: 101%;
      max-width: 150%;
      /* max-height: 150%; */
      position: absolute;
      pointer-events: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .block:not(.active):hover > img {
  opacity: 0.1;
  transition: var(--transition);
  -webkit-transition: var(--transition);
  -moz-transition: var(--transition);
  -o-transition: var(--transition);
}

.words:not(.active):hover > p{
  /* color: var(--main-hover-color); */
  opacity: 0.5 !important;
  transition: var(--transition);
  -webkit-transition: var(--transition);
  -moz-transition: var(--transition);
  -o-transition: var(--transition);
}
`
const Footer = styled.a`
  position: fixed;
  height: var(--margin);
  bottom: 0;
  text-align: center;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  width: calc(100vw - calc(var(--margin)*2));
  border-top: solid var(--border-weight);
  border-bottom: solid var(--border-weight);
  border-color: var(--main-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover{
    border-color: var(--main-hover-color);
    background-color: var(--main-hover-color);
    color: var(--main-bg-color);
    transition: var(--transition);
  -webkit-transition: var(--transition);
  -moz-transition: var(--transition);
  -o-transition: var(--transition);
  }
`
//COMPONENTS
function Nav() {
  return (
    <Navbar>
      <NavLink to="/" className="home"> daetyas </NavLink>
      <Links>
        <NavLink to="/music" style={({ isActive }) => ({ backgroundColor: isActive ? "var(--main-text-color)" : null, color: isActive ? "var(--main-bg-color)" : null })}>music</NavLink>
        <NavLink to="/photos" style={({ isActive }) => ({ backgroundColor: isActive ? "var(--main-text-color)" : null, color: isActive ? "var(--main-bg-color)" : null })}>photos</NavLink>
        <NavLink to="/words" style={({ isActive }) => ({ backgroundColor: isActive ? "var(--main-text-color)" : null, color: isActive ? "var(--main-bg-color)" : null })}>words</NavLink>
        <NavLink to="/info" style={({ isActive }) => ({ backgroundColor: isActive ? "var(--main-text-color)" : null, color: isActive ? "var(--main-bg-color)" : null })}>info</NavLink>
      </Links>
    </Navbar>
  )
}

//PAGES
function Content(arg) {
  const snap = useSnapshot(state);
  const array = snap[arg.type];
  const gridRef = useRef(null);
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  scrollToTop();

  //Intersection Observer - run function when visible
  const callbackFunction = () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(
      function randomize(block) {
        block.style.height = `${Math.floor(Math.random() * 200) + 250}px`
      }
    )
  }

  const options = () => {
    const value = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    return value
  }

  useEffect(() => {
    const ref = gridRef.current;
    const observer = new IntersectionObserver(callbackFunction,
      options())
    if (ref) observer.observe(ref)
    return () => {
      if (ref) { observer.unobserve(ref) }
    }
  }, [options])


  const shuffledBlocks = () => {

    const musicBlocks = snap.music.map((work) => (
      <NavLink to={`/music/${work.name}`} key={work.name} className="block">
        <p>{work.title}</p>
        <img src={work.images[0]} key={Math.random()} alt="placeholder" />
      </NavLink>
    ));

    const photosBlocks = snap.photos.map((work) => (
      <NavLink to={`/photos/${work.name}`} key={work.name} className="block">
        <p>{work.title}</p>
        <img src={work.images[0]} key={Math.random()} alt="placeholder" />
      </NavLink>
    ));

    const wordsBlocks = snap.words.map((work) => (
      <NavLink to={`/words/${work.name}`} key={work.name} className="block words">
        <p>{work.statement}</p>
      </NavLink>
    ));

    const array = musicBlocks.concat(photosBlocks).concat(wordsBlocks);

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  if (arg.type === 'home') {
    // Show random entries from both Music and Photos
    return (
      <Container>
        {arg.page && <Page page={arg.page} type={arg.type} />}
        {/* {arg.arg && <Related />} */}
        <Grid ref={gridRef}>
          {shuffledBlocks()}
        </Grid>
      </Container >
    )
  } else if (arg.type === 'words') {
    return (
      <Container>
        {arg.page && <Page page={arg.page} type={arg.type} />}
        {/* {arg.arg && <Related />} */}
        <Grid ref={gridRef}>
          {array.map((work) => (
            <NavLink to={`/words/${work.name}`} key={work.name} className="block words">
              <p>{work.statement}</p>
            </NavLink>
          ))}
        </Grid>
      </Container >
    )
  } else {
    return (
      <Container>
        {arg.page && <Page page={arg.page} type={arg.type} />}
        {/* {arg.arg && <Related />} */}
        <Grid ref={gridRef}>
          {array.map((work) => (
            <NavLink to={`/${arg.type}/${work.name}`} key={work.name} className="block">
              <p>{work.title}</p>
              {work.images && <img src={work.images[0]} key={Math.random()} alt="placeholder" />}
            </NavLink>
          ))}
        </Grid>
      </Container >
    )
  }
}

function Info() {
  const snap = useSnapshot(state);
  return (
    <Container>
      <div>
        {snap.info.map((data) => (
          <p key={Math.random()}>{data.about}</p>
        ))}
      </div>
    </Container>
  )
}

// Final Output
const App = React.memo(function App() {
  GetContent(db);
  const snap = useSnapshot(state);
  state.content = snap.music.concat(snap.photos).concat(snap.words);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Content type={'home'} page={null} />} />
        <Route path="/music" element={<Content type={'music'} page={null} />} />
        <Route path="/photos" element={<Content type={'photos'} page={null} />} />
        <Route path="/words" element={<Content type={'words'} page={null} />} />
        {snap.content.map((doc) => (
          <React.Fragment key={Math.random()}>
            <Route path={`/music/${doc.name}`} element={<Content type={'music'} page={`${doc.name}`} />} />
            <Route path={`/photos/${doc.name}`} element={<Content type={'photos'} page={`${doc.name}`} />} />
            <Route path={`/words/${doc.name}`} element={<Content type={'words'} page={`${doc.name}`} />} />
          </React.Fragment>
        ))}
        <Route path="/info" element={<Info />} />
      </Routes>
      {snap.info.map((data) => (
        <Footer href={`mailto:${data.email}`} key={Math.random()}>{data.email}</Footer>
      ))}
    </div>
  );
})

export default App;