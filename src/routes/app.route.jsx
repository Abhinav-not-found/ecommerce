import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import AuthLayout from "@/components/layout/auth-layout"
import Layout from "@/components/layout/layout"
import Login from "@/pages/auth/login"
import Register from "@/pages/auth/register"
import Home from "@/pages/home"
import Landing from "@/pages/landing"
import ProtectedRoute from "@/routes/protected.route"
import PublicRoute from "./public.route"

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <PublicRoute>
              <Landing />
            </PublicRoute>
          ),
        },
        {
          path: "/home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <PublicRoute>
          <AuthLayout />
        </PublicRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to='login' replace />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default AppRoute
