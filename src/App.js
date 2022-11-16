import React, { useEffect } from "react";
import "./App.css";
import { GlobalStyle } from "./components/theme";
import { Route, Routes } from "react-router-dom";
import { useSnapshot } from "valtio";
import { state } from "./utils/state";
import { GetContent } from "./utils/Firebase/Firebase.service";
import { Nav } from "./components/nav";
import Content from "./pages/main";
import { Footer } from "./pages/main.style";
import { Info } from "./pages/info";

// Final Output
const App = React.memo(function App() {
  const snap = useSnapshot(state);
  useEffect(() => GetContent(), []);

  state.content = snap.music.concat(snap.photos).concat(snap.words);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Content type={"home"} page={null} />} />
        <Route path="/music" element={<Content type={"music"} page={null} />} />
        <Route
          path="/photos"
          element={<Content type={"photos"} page={null} />}
        />
        <Route path="/words" element={<Content type={"words"} page={null} />} />
        {snap.content.map((doc) => (
          <React.Fragment key={Math.random()}>
            <Route
              path={`/music/${doc.name}`}
              element={<Content type={"music"} page={`${doc.name}`} />}
            />
            <Route
              path={`/photos/${doc.name}`}
              element={<Content type={"photos"} page={`${doc.name}`} />}
            />
            <Route
              path={`/words/${doc.name}`}
              element={<Content type={"words"} page={`${doc.name}`} />}
            />
          </React.Fragment>
        ))}
        <Route path="/info" element={<Info />} />
      </Routes>
      {snap.info.map((data) => (
        <Footer href={`mailto:${data.email}`} key={Math.random()}>
          {data.email}
        </Footer>
      ))}
    </div>
  );
});

export default App;
