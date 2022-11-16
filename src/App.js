import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { GlobalStyle } from "./components/theme";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSnapshot } from "valtio";
import { state } from "./utils/state";
import { Nav } from "./components/nav";
import Content from "./pages/main";
import { Footer } from "./pages/main.style";
import { Info } from "./pages/info";
import Editor from "./pages/editor/editor";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { handleGetAbout, handleGetCategories, handleGetData } from "./utils/Firebase/Firebase.service";

const App = function App() {
  const snap = useSnapshot(state);
  const header = useRef(null);
  const [user, setUser] = useState(null);
  const [padding, setPadding] = useState({ header: 0 });
  const auth = getAuth();
  let location = useLocation();

// Set the padding for the header
  useEffect(() => {
    setPadding({ header: header.current.clientHeight });
  }, [location, header]);
  // Get Data
  useEffect(() => {
    handleGetData();
    handleGetCategories();
    handleGetAbout();
  }, []);
  // check if the user is logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, [auth, setUser]);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav header={header} />
      <Routes>
        <Route path="/" element={<Content type={"home"} page={null} />} />
        <Route path="/music" element={<Content type={"music"} page={null} />} />
        <Route
          path="/photos"
          element={<Content type={"photos"} page={null} />}
        />
        <Route path="/words" element={<Content type={"words"} page={null} />} />
        <Route
          path="/editor"
          element={
            <Editor setUser={setUser} user={user} marginTop={padding.header} />
          }
        />
        <Route path="/info" element={<Info />} />
        {snap.data.map(({ name, category, path }) => (
          <React.Fragment key={Math.random()}>
            <Route
              path={`/${category}/${path}`}
              element={<Content type={category} page={`${name}`} />}
            />
            {/* <Route
              path={`/photos/${name}`}
              element={<Content type={"photos"} page={`${name}`} />}
            />
            <Route
              path={`/words/${name}`}
              element={<Content type={"words"} page={`${name}`} />}
            /> */}
          </React.Fragment>
        ))}
      </Routes>
      <Footer href={`mailto:${snap.email}`} key={Math.random()}>
        {snap.email}
      </Footer>
    </div>
  );
};

export default App;
