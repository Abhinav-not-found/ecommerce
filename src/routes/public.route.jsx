import { Navigate } from "react-router"
import { useAuth } from "@/context/authContext"

const PublicRoute = ({ children }) => {
  const { loggedInUser } = useAuth()
  if (loggedInUser) {
    return <Navigate to='/home' replace />
  }
  return children
}

export default PublicRoute
