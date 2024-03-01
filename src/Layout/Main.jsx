import Navbar from "../components/Home/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mb-20 p-9">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default Main;