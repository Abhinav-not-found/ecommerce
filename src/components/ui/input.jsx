const Input = ({
  placeholder,
  type = "text",
  register,
  errors,
  name,
  rules,
}) => {
  return (
    <input
      type={type}
      className={`ring rounded-md p-1 px-2 ${errors[name] ? "ring-red-500 outline-red-500" : ""}`}
      placeholder={placeholder}
      {...register(name, rules)}
    />
  )
}

export default Input
