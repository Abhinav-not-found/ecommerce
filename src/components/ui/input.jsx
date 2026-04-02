import clsx from "clsx"

const Input = ({
  placeholder,
  type = "text",
  register,
  errors,
  name,
  rules,
  className,
}) => {
  return (
    <input
      type={type}
      className={clsx(
        `ring rounded-md p-1 px-2 ${errors[name] ? "ring-red-500 outline-red-500" : ""}`,
        className,
      )}
      placeholder={placeholder}
      {...register(name, rules)}
    />
  )
}

export default Input
