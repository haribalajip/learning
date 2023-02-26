import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Errorpage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      { path: "about-me", element: <AboutMe /> },
      { path: "home", element: <Home /> },
      {
        path: "product/:id",
        element: <Product />,
        loader: async () => {
          // Waits for this loader to resolve before loading the element.
          return await new Promise((resolve) =>
            setTimeout(() => resolve(true), 2000)
          );
        },
      },
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
