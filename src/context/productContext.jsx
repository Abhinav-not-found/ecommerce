import { createContext, useContext, useEffect, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(() => {
    const data = localStorage.getItem("products")
    return data ? JSON.parse(data) : []
  })
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(product))
  }, [product])

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext)
}
