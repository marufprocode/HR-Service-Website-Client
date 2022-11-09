import AddService from "../pages/dashboard/AddService";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import Services from "../pages/services/Services";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/services',
                element: <PrivateRoute><Services/></PrivateRoute>
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: '/dashboard/add-service',
                element: <AddService/>
            }
        ]
    }
]);

export default routes;