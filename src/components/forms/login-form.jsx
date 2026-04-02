import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { useAuth } from "@/context/authContext"
import Button from "../ui/button"
import Field from "../ui/field"
import Input from "../ui/input"

const LoginForm = () => {
  const navigate = useNavigate()
  const { registeredUser, setLoggedInUser } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (!registeredUser) {
          toast.error("User not registered")
        } else if (
          registeredUser.email === data.email &&
          registeredUser.password === data.password
        ) {
          setLoggedInUser(data)
          toast.success("User Logged In")
          navigate("/home")
        } else {
          toast.error("Invalid Credentials")
        }
        reset()
      })}
      className=' space-y-2'
    >
      <Field name={"email"} error={errors.email}>
        <Input
          name='email'
          type='email'
          placeholder={"johnDoe@gmail.com"}
          register={register}
          rules={{ required: "Email is required" }}
          errors={errors}
        />
      </Field>
      <Field name={"password"} error={errors.password}>
        <Input
          type='text'
          name='password'
          placeholder={"● ● ● ● ●"}
          className='font-mono'
          register={register}
          rules={{ required: "Password is required" }}
          errors={errors}
        />
      </Field>
      <Button type='submit' className={"w-full rounded-xl py-3 mt-2"}>
        Submit
      </Button>
    </form>
  )
}

export default LoginForm
