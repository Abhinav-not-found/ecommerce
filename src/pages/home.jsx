import axios from "axios"
import { useEffect } from "react"
import Container from "@/components/general/container"
import Card from "@/components/ui/card"
import { useProduct } from "@/context/productContext"

const Home = () => {
  const { product,setProduct } = useProduct()

  const getAllProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products")
    setProduct(res.data.products)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <Container>
      <main>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4 gap-y-6'>
          {product?.map((data) => {
            return <Card key={data.id} data={data} />
          })}
        </div>
      </main>
    </Container>
  )
}

export default Home
