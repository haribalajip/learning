import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Root() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about-me">AboutMe</Link>
      <Outlet />
    </div>
  );
}
