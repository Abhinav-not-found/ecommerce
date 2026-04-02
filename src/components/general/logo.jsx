import clsx from "clsx"
import { Link } from "react-router"

const Logo = ({ className, to = "/" }) => {
  return (
    <Link
      to={to}
      className={clsx(
        "text-xl font-semibold tracking-tight cursor-pointer",
        className,
      )}
    >
      Novan
    </Link>
  )
}

export default Logo
