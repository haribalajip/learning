import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Root from "./pages/Root";
import Errorpage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      { path: "/about-me", element: <AboutMe /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
