import LoginForm from "@/components/forms/login-form"
import AuthUi from "@/components/ui/auth-ui"

const Login = () => {
  return (
    <main className='h-screen w-full flex items-center justify-center'>
      <AuthUi>
        <LoginForm />
      </AuthUi>
    </main>
  )
}

export default Login
