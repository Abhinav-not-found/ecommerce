import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import AuthLayout from "@/components/layout/auth-layout"
import Layout from "@/components/layout/layout"
import Login from "@/pages/auth/login"
import Register from "@/pages/auth/register"
import Home from "@/pages/home"
import Landing from "@/pages/landing"
import ProductDetail from "@/pages/product-detail"
import ProtectedRoute from "@/routes/protected.route"
import PublicRoute from "./public.route"
import Cart from "@/pages/cart"

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
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/product/:id",
          element: (
            <ProtectedRoute>
              <ProductDetail />
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
