import { ShoppingBag } from "lucide-react"
import { Link } from "react-router"
import Button from "./button"

const Card = ({ data }) => {
  return (
    <div className='size-52 h-56 p-2 pb-4 rounded-lg outline outline-neutral-300'>
      <div className='w-full h-32 bg-neutral-100 rounded-md'>
        <img
          src={data.images[0]}
          alt={data.title}
          className='object-cover w-full h-full'
          loading='lazy'
        />
      </div>
      <div className='w-full h-1/2 pb-2 flex flex-col justify-center gap-2'>
        <Link
          to={`/product/${data.id}`}
          className='text-[16px] font-medium hover:underline underline-offset-2 line-clamp-1'
        >
          {data.title}
        </Link>
        <div className='flex justify-between items-center'>
          <p className='text-sm'>${data.price}</p>
          <Button size='icon' variant='ghost' className={" "}>
            <ShoppingBag className='size-4 text-neutral-500' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
