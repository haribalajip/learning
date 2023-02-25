import { NavLink } from "react-router-dom";
import classes from "./TopNav.module.css";
export default function TopNav() {
  return (
    <div className={classes.topNav}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/about-me"
      >
        AboutMe
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/product/1"
      >
        Sample product
      </NavLink>
    </div>
  );
}
