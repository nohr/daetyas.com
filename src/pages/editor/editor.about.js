import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import {
  handleGetAbout,
  uploadAbout,
} from "../../utils/Firebase/Firebase.service";
import { state } from "../../utils/state";

export default function AboutForm() {
  const snap = useSnapshot(state);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    handleGetAbout();
  }, []);

  return (
    <div className="formWrap">
      {saved ? (
        <>
          <p>Changes Saved!</p>
          <button onClick={() => window.location.reload(false)}>
            Post Again
          </button>
        </>
      ) : (
        <div className="about-form">
          <h1>About</h1>
          <label htmlFor="about">Text</label>
          <textarea
            name="about"
            id="about"
            cols="20"
            rows="10"
            placeholder="About"
            value={snap.about}
            onChange={(e) => (state.about = e.target.value)}
          ></textarea>
          <br />
          <label htmlFor="file">Photo</label>
          <input type="file" id="file" />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={snap.email}
            onChange={(e) => (state.email = e.target.value)}
          />
          <br />
          <button
            onClick={() => {
              uploadAbout();
              setSaved(true);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
