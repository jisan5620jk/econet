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
import Home7 from "../Pages/Home7/Home7";
import Main7 from "../Main/Main7";
import Main8 from "../Main/Main8";
import Home8 from "../Pages/Home8/Home8";
import Main9 from "../Main/Main9";
import Home9 from "../Pages/Home9/Home9";
import Home10 from "../Pages/Home10/Home10";
import Main10 from "../Main/Main10";
import Main11 from "../Main/Main11";
import Home11 from "../Pages/Home11/Home11";
import Home12 from "../Pages/Home12/Home12";
import Main12 from "../Main/Main12";
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";
import Main4 from "../Main/Main4";
import Home4 from "../Pages/Home4/Home4";

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
    element: <Main3 />,
    children: [
      {
        path: "/home3",
        element: <Home3 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main4 />,
    children: [
      {
        path: "/home4",
        element: <Home4 />,
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
  {
    errorElement: <ErrorPage />,
    element: <Main7 />,
    children: [
      {
        path: "/home7",
        element: <Home7 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main8 />,
    children: [
      {
        path: "/home8",
        element: <Home8 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main9 />,
    children: [
      {
        path: "/home9",
        element: <Home9 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main10 />,
    children: [
      {
        path: "/home10",
        element: <Home10 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main11 />,
    children: [
      {
        path: "/home11",
        element: <Home11 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main12 />,
    children: [
      {
        path: "/home12",
        element: <Home12 />,
      },
    ],
  },
]);

export default router;
