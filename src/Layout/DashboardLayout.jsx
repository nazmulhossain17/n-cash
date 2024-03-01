import Sidebar from '@/components/Home/Shared/Sidebar/Sidebar';

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    
  return (
    <>
     <div>
        <div>
          <nav className="flex items-center justify-between p-6 bg-slate-700">
            <div>
              <Link
                to="/"
                // style={headingStyle}
                className="hidden space-x-12 text-3xl font-bold md:flex font-monospace"
              >
                Ncash
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl text-lime-50">
                Welcome!
              </span>

              {/* <img
                className="w-10 h-10 rounded-full"
                src={currentUser?.user.image}
              /> */}
            </div>
          </nav>
          <div className="flex">
            <Sidebar />

            <div className="w-full min-h-screen p-8 bg-gray-100">
              <div>
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout