import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="bg-gray-800">
  <div className="px-4 mx-auto max-w-7xl">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <img src="https://t4.ftcdn.net/jpg/02/63/14/05/360_F_263140597_8ElVI2s3i2RrP9agrihRQEugEN8WtXVs.jpg" alt="Logo" className="h-10 rounded-full"/>
        <Link to="/" className="px-3 py-2 text-white">Home</Link>
        <a href="#" className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
        <a href="#" className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
        <a href="#" className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
      </div>
      <div className="flex">
        <Link to="/login"><Button href="#" className="px-3 py-2 text-gray-300 bg-green-700 hover:bg-gray-700 hover:text-white">Login</Button></Link>
        <Link to="/register" className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Sign Up</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar