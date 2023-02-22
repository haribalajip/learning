import { Link } from "react-router-dom";
import classes from "./TopNav.module.css";
export default function TopNav() {
  return (
    <div className={classes.topNav}>
      <Link to="/home">Home</Link>
      <Link to="/about-me">AboutMe</Link>
    </div>
  );
}
