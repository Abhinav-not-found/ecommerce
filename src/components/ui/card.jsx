import { ShoppingBag } from "lucide-react"
import { Link } from "react-router"
import Button from "./button"

const Card = () => {
  return (
    <div className='size-52 p-2 pb-4 rounded-lg outline outline-neutral-300'>
      <div className='w-full h-2/3 bg-neutral-100 rounded-md'></div>
      <div className='w-full h-1/2 pt-2'>
        <Link
          to={""}
          className='font-medium hover:underline underline-offset-2'
        >
          Name
        </Link>
        <div className='flex justify-between items-center'>
          <p className='text-sm'>price</p>
          <Button size='icon' variant='ghost' className={" "}>
            <ShoppingBag className='size-4 text-neutral-500' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
