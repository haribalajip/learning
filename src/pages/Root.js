import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav/TopNav";
import { useNavigation } from "react-router-dom";
export default function Root() {
  let navigation = useNavigation();
  return (
    <div>
      <TopNav />
      {navigation.state === "loading" && <p> Route Loading...</p>}

      <Outlet />
    </div>
  );
}
