import { NavLink } from "react-router-dom";
import { auth } from "../utils/Firebase/api";
import { Constant, Links, Navbar } from "./nav.style";

export function Nav({ header, user }) {
  return (
    <Navbar ref={header}>
      {/* Auth Links */}
      {user ? (
        <Links className="auth">
          <NavLink
            to="/editor"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "var(--main-text-color)" : null,
              color: isActive ? "var(--main-bg-color)" : null,
            })}
          >
            editor
          </NavLink>
          <div onClick={() => auth.signOut()} className="link">
            sign out
          </div>
        </Links>
      ) : null}
      <Constant width={user ? "66.67%" : "66.67%"}>
        {/* Home Link */}
        <NavLink to="/" className="home">
          daetyas
        </NavLink>
        {/* Nav Links */}
        <Links>
          <NavLink
            to="/music"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "var(--main-text-color)" : null,
              color: isActive ? "var(--main-bg-color)" : null,
            })}
          >
            music
          </NavLink>
          <NavLink
            to="/photos"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "var(--main-text-color)" : null,
              color: isActive ? "var(--main-bg-color)" : null,
            })}
          >
            photos
          </NavLink>
          <NavLink
            to="/words"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "var(--main-text-color)" : null,
              color: isActive ? "var(--main-bg-color)" : null,
            })}
          >
            words
          </NavLink>
          <NavLink
            to="/info"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "var(--main-text-color)" : null,
              color: isActive ? "var(--main-bg-color)" : null,
            })}
          >
            info
          </NavLink>
        </Links>
      </Constant>
    </Navbar>
  );
}
