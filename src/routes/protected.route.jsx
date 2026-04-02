import { Navigate } from "react-router"
import { useAuth } from "@/context/authContext"

const ProtectedRoute = ({ children }) => {
  const { loggedInUser } = useAuth()
  if (!loggedInUser) {
    return <Navigate to='/' replace />
  }
  return children
}

export default ProtectedRoute
