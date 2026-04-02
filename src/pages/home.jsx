import Container from "@/components/general/container"
import Card from "@/components/ui/card"

const Home = () => {
  return (
    <Container>
      <main>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4 gap-y-6'>
          <Card />
        </div>
      </main>
    </Container>
  )
}

export default Home
