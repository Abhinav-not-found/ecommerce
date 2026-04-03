import { createRoot } from "react-dom/client"
import "./index.css"
import { Toaster } from "sonner"
import { AuthProvider } from "./context/authContext"
import { CartProvider } from "./context/cartContext"
import { ProductProvider } from "./context/productContext"
import AppRoute from "./routes/app.route"

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
        <AppRoute />
        <Toaster />
      </CartProvider>
    </ProductProvider>
  </AuthProvider>,
)
