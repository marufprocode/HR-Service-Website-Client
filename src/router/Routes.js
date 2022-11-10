import AddService from "../pages/dashboard/AddService";
import Dashboard from "../pages/dashboard/Dashboard";
import MyReviews from "../pages/dashboard/MyReviews";
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
                element: <Services/>
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails/>
            },
            {
                path: '/service-details/add/:id',
                element: <PrivateRoute><ServiceDetails/></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: '/dashboard/add-service',
                element: <PrivateRoute><AddService/></PrivateRoute>
            },
            {
                path: '/dashboard/my-reviews',
                element: <PrivateRoute><MyReviews/></PrivateRoute>
            },
        ]
    }
]);

export default routes;