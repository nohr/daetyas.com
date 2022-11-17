import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSnapshot } from "valtio";
import { state } from "./utils/state";
import { Nav } from "./components/nav";
import Content from "./pages/main";
import { Footer } from "./pages/main.style";
import { Info } from "./pages/info";
import Editor from "./pages/editor/editor";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase/api";

const App = function App() {
  const snap = useSnapshot(state);
  const header = useRef(null);
  const [user, setUser] = useState(null);
  const [padding, setPadding] = useState({ header: 0 });
  const data = snap.music.concat(snap.photos).concat(snap.words);
  let location = useLocation();

  // Set the padding for the header
  useEffect(() => {
    setPadding({ header: header.current.clientHeight });
  }, [location, header]);
  // check if the user is logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });
  }, [setUser]);

  return (
    <div className="App">
      <Nav header={header} user={user} />
      <Routes>
        <Route path="/" element={<Content type={"home"} page={null} />} />
        <Route path="/info" element={<Info />} />
        <Route
          path="/editor"
          element={
            <Editor setUser={setUser} user={user} marginTop={padding.header} />
          }
        />
        {snap.categories.map((category) => (
          <Route
            key={category}
            path={`/${category}`}
            element={<Content type={category} page={null} />}
          />
        ))}
        {data.map(({ name, category, path }) => (
          <Route
            key={`/${category}/${path}`}
            path={`/${category}/${path}`}
            element={<Content type={category} page={`${name}`} />}
          />
        ))}
      </Routes>
      <Footer href={`mailto:${snap.email}`} key={Math.random()}>
        {snap.email}
      </Footer>
    </div>
  );
};

export default App;
