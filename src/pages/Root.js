import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav/TopNav";
export default function Root() {
  return (
    <div>
      <TopNav />
      <Outlet />
    </div>
  );
}
