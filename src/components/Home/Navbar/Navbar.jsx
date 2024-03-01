import { Button } from '@/components/ui/button'
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '@/redux/user/userSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
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
              <img
                src="https://t4.ftcdn.net/jpg/02/63/14/05/360_F_263140597_8ElVI2s3i2RrP9agrihRQEugEN8WtXVs.jpg"
                alt="Logo"
                className="h-10 rounded-full"
              />
              <Link to="/" className="px-3 py-2 text-white">
                Home
              </Link>
              <a
                href="#"
                className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </a>
             
              <a
                href="#"
                className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="block px-4 py-2 text-white lg:hidden hover:text-red-600"
              >
                {isMobileMenuOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>

              {/* Mobile menu */}
              {isMobileMenuOpen && (
                <div className="absolute left-0 right-0 bg-gray-800 lg:hidden top-16">
                  {currentUser ? (
                    <>
                     <Link
                     to="/dashboard"
                     className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                   >
                     Dashboard
                   </Link>
                    <button
                      onClick={handleLogOut}
                      className="block px-4 py-2 text-gray-300 hover:text-red-600"
                    >
                      Log out
                    </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}

              {/* Desktop buttons */}
              <div className="hidden lg:flex">
              {currentUser ? (
                <>
                 <Link
                     to="/dashboard"
                     className="px-3 py-2 text-gray-300"
                   >
                    <Button
                        href="#"
                        className="px-3 py-2 text-gray-300 bg-green-700 hover:bg-gray-700 hover:text-white">Dashboard</Button>
                   </Link>
     
                  <button
                    onClick={handleLogOut}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600"
                  >
                    Log out
                  </button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button
                        href="#"
                        className="px-3 py-2 text-gray-300 bg-green-700 hover:bg-gray-700 hover:text-white"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link
                      to="/register"
                      className="px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar