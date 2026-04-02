import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { useAuth } from "@/context/authContext"
import Button from "../ui/button"
import Field from "../ui/field"
import Input from "../ui/input"

const RegisterForm = () => {
  const navigate = useNavigate()
  const { setRegisteredUser } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setRegisteredUser(data)
        toast.success("User Registered")
        navigate("/auth/login")
        reset()
      })}
      className=' space-y-2'
    >
      <Field name={"name"} error={errors.name}>
        <Input
          name='name'
          type='text'
          placeholder={"John Doe"}
          register={register}
          rules={{ required: "Name is required" }}
          errors={errors}
        />
      </Field>
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
          type='password'
          name='password'
          placeholder={""}
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

export default RegisterForm
