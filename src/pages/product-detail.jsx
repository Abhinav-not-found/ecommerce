import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Container from "@/components/general/container"

const ProductDetail = () => {
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState({})
  console.log(singleProduct)
  const [loading, setLoading] = useState(false)
  const getSingleProduct = async () => {
    setLoading(true)
    const res = await axios.get(`https://dummyjson.com/products/${id}`)
    setSingleProduct(res.data)
    setLoading(false)
  }
  useEffect(() => {
    getSingleProduct()
  }, [])

  if (loading) {
    return <Container>Loading...</Container>
  }
  return (
    <Container>
      <main className='flex gap-5'>
        <div className='w-1/2 h-screen'>
          <div className='w-full h-100 bg-neutral-100 rounded-lg'>
            <img
              src={singleProduct?.images?.[0]}
              alt={singleProduct?.title}
              className='object-cover w-full h-full'
              loading='lazy'
            />
          </div>
        </div>
        <div className='w-1/2 h-screen'>
          <p className='text-sm first-letter:uppercase'>
            {singleProduct.category}
          </p>
          <h2 className='text-3xl font-medium'>{singleProduct.title}</h2>
          <p className='mt-10 text-xl'>${singleProduct.price}</p>
        </div>
      </main>
    </Container>
  )
}

export default ProductDetail
