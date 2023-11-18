import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Services from "./pages/services/Services";
import OurTeams from "./pages/ourTeams/OurTeams";
import Layout from "./layouts";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "our-teams",
        element: <OurTeams />,
      },
    ],
  },
]);
