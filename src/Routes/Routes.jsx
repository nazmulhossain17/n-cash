import Register from "../pages/Register/Register";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
  
]);
export default router