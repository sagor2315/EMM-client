import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceExplore from "../Components/ServiceExplore/ServiceExplore";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Profile from "./PrivateRoute/Profile";
import Dashboard from "./PrivateRoute/Dashboard";
import ProtectedRoute2 from "./ProtectedRoute/ProtectedRoute2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/service/:id",
        element: (
          <ProtectedRoute>
            <ServiceExplore />
          </ProtectedRoute>
        ),
        loader: () => fetch("/service.json"),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute2>
            <Login />
          </ProtectedRoute2>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute2>
            <Register />
          </ProtectedRoute2>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
