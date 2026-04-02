import RegisterForm from "@/components/forms/register-form"
import AuthUi from "@/components/ui/auth-ui"

const Register = () => {
  return (
    <main className='h-screen w-full flex items-center justify-center'>
      <AuthUi variant='register'>
        <RegisterForm />
      </AuthUi>
    </main>
  )
}

export default Register
