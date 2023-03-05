import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { ProductLoader } from "./loaders/product-loader";
import Root from "./pages/Root";
import Errorpage from "./pages/ErrorPage";
import { lazy, Suspense } from "react";

const Product = lazy(() => import("./pages/Product"));
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
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Product />
          </Suspense>
        ),
        loader: ProductLoader,
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
