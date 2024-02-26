
import Hero from './components/local/Hero'
import { Button } from './components/ui/button'

function App() {


  return (
    <>
    <nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <img src="https://t4.ftcdn.net/jpg/02/63/14/05/360_F_263140597_8ElVI2s3i2RrP9agrihRQEugEN8WtXVs.jpg" alt="Logo" className="h-10 rounded-full"/>
        <a href="#" className="text-white px-3 py-2">Home</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2">About</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2">Services</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2">Contact</a>
      </div>
      <div className="flex">
        <Button href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white bg-green-700 px-3 py-2">Login</Button>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2">Sign Up</a>
      </div>
    </div>
  </div>
</nav>
     <Hero/>
    </>
  )
}

export default App
