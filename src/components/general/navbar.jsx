import { LogOut, ShoppingBag } from "lucide-react"
import { Link } from "react-router"
import { useAuth } from "@/context/authContext"
import Button from "../ui/button"
import Logo from "./logo"

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useAuth()
  return (
    <header className='h-14 px-10 w-full flex justify-between items-center'>
      <Logo to={loggedInUser && "/home"} />
      {loggedInUser ? (
        <div className='flex gap-2'>
          <CartBtn />
          <LogoutBtn setLoggedInUser={setLoggedInUser} />
        </div>
      ) : (
        <LoginBtn />
      )}
    </header>
  )
}

export default Navbar

const LoginBtn = () => {
  return (
    <Link to={"/auth/login"}>
      <Button>Login</Button>
    </Link>
  )
}
const LogoutBtn = ({ setLoggedInUser }) => {
  const handleLogout = () => {
    setLoggedInUser(null)
    localStorage.removeItem("loggedInUser")
  }
  return (
    <Button
      onClick={handleLogout}
      variant='ghost'
      className={"flex items-center gap-2 font-normal"}
    >
      <LogOut className='size-4' /> Logout
    </Button>
  )
}
const CartBtn = () => {
  return (
    <Link to={"/cart"}>
      <Button variant='ghost' className={"flex items-center gap-2 font-normal"}>
        <ShoppingBag className='size-4' />
        <p>Cart</p>
      </Button>
    </Link>
  )
}
