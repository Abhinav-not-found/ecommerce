import HeroImg from "../../../public/images/hero.png"
import Button from "../ui/button"

const Hero = () => {
  return (
    <section className='bg-neutral-100 w-full h-[90vh] rounded-xl p-12 space-y-8 relative'>
      <div className='text-7xl font-semibold space-y-4'>
        <h1>
          Your <span className='text-[var(--blue)]'>One-Stop</span>
        </h1>
        <h1>
          <span className='text-[var(--blue)]'>Shop</span> for Everything
        </h1>
        <h1>You Need!</h1>
      </div>
      <div className='text-2xl space-y-0'>
        <p>Fast shipping, friendly customer service,</p>
        <p>and secure transactions guaranteed!</p>
      </div>
      <div className='absolute right-20 bottom-0'>
        <img src={HeroImg} alt='hero image' className='w-auto h-[45rem]' />
      </div>
      <div>
        <div className='size-60 bg-[var(--yellow)] rounded-xl p-4'>
          <h2 className='text-4xl text-[var(--blue)] font-extrabold tracking-tight leading-8'>
            Back to school
          </h2>
          <div className='text-sm my-2 tracking-tighter'>
            <p className=''>Grab your school supplies</p>
            <p className=''>for unbeatable prices!</p>
          </div>
          <Button className={"rounded-full! bg-[var(--blue)]!"}>
            Claim Discount
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
