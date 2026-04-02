import { Link } from "react-router"
import Logo from "../general/logo"

const AuthUi = ({ children, variant = "login" }) => {
  return (
    <div className='bg-white ring ring-neutral-400 w-md h-fit rounded-xl shadow-lg p-18 space-y-6'>
      {variant === "login" ? (
        <h1 className='text-2xl text-center font-medium'>
          Login to{" "}
          <Logo className={" text-2xl! hover:underline underline-offset-2"} />
        </h1>
      ) : (
        <h1 className='text-2xl text-center font-medium'>
          Register to{" "}
          <Logo className={" text-2xl! hover:underline underline-offset-2"} />
        </h1>
      )}
      {children}
      {variant === "login" ? (
        <p className='text-md text-center mt-8'>
          Don't have an account?{" "}
          <Link
            to={"/auth/register"}
            className='font-medium cursor-pointer hover:underline underline-offset-2'
          >
            Register
          </Link>
        </p>
      ) : (
        <p className='text-md text-center mt-8'>
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className='font-medium cursor-pointer hover:underline underline-offset-2'
          >
            Login
          </Link>
        </p>
      )}
    </div>
  )
}

export default AuthUi
