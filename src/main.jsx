import { createRoot } from "react-dom/client"
import "./index.css"
import { Toaster } from "sonner"
import { AuthProvider } from "./context/authContext"
import AppRoute from "./routes/app.route"

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoute />
    <Toaster />
  </AuthProvider>,
)
