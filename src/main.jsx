import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './Home/Home';
import Blog from "./components/Blog/Blog";
import Login from "./components/Registration/Login/Login";
import Register from "./components/Registration/Register/Register";
import AuthProvider from './providers/AuthProvider.jsx';
import "react-tooltip/dist/react-tooltip.css";
import Terms from './components/Registration/Terms/Terms.jsx';
import ChefDetails from './pages/Chefs/ChefDetails.jsx';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Favourite from './pages/Favourite/Favourite.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "/chefs",
        element: <ChefDetails></ChefDetails>
      },
      {
        path: "/favourite",
        element: <Favourite></Favourite>
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);