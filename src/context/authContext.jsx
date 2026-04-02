import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(() => {
    const data = localStorage.getItem("registeredUser")
    return data ? JSON.parse(data) : null
  })
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const data = localStorage.getItem("loggedInUser")
    return data ? JSON.parse(data) : null
  })
  useEffect(() => {
    localStorage.setItem("registeredUser", JSON.stringify(registeredUser))
  }, [registeredUser])

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
  }, [loggedInUser])
  return (
    <AuthContext.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
