import Register from "../pages/Register/Register";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/Layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";


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
    {
        path: "/dashboard",
        element:(
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
            ),
        children:[
        {  
            path: "/dashboard/",
            element: <Dashboard/>
        }
        ]
    }
  
]);
export default router