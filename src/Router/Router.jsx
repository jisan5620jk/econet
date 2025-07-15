import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import Main2 from "../Main/Main2";
import Main5 from "../Main/Main5";
import Home5 from "../Pages/Home5/Home5";
import Main6 from "../Main/Main6";
import Home6 from "../Pages/Home6/Home6";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main2 />,
    children: [
      {
        path: "/home2",
        element: <Home2 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main5 />,
    children: [
      {
        path: "/home5",
        element: <Home5 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main6 />,
    children: [
      {
        path: "/home6",
        element: <Home6 />,
      },
    ],
  },
]);

export default router;
