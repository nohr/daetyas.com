import { NavLink } from "react-router-dom";
import { Links, Navbar } from "./nav.style";

export function Nav() {
  return (
    <Navbar>
      <NavLink to="/" className="home">
        {" "}
        daetyas{" "}
      </NavLink>
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
    </Navbar>
  );
}
