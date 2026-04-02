import clsx from "clsx"

const Container = ({ children, className }) => {
  return <div className={clsx("px-10", className)}>{children}</div>
}

export default Container
