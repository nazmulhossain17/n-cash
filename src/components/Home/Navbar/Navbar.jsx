import { Button } from '@/components/ui/button'
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '@/redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogOut = async() => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {
          method: "GET",
          credentials: "include", // Include credentials (cookies) in the request
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      // Clear the access token on the client side (assuming you're using cookies)
      // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      dispatch(deleteUserSuccess(data));
      document.location.reload()
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  }
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
        <button
         onClick={handleLogOut}
        className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600">
              Log out
        </button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar