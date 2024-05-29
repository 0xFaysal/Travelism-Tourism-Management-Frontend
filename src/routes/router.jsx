import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <h1>About Us</h1>,
            },
            {
                path: "/contact",
                element: <h1>Contact Us</h1>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/tourist_spots",
                element: <h1>Tourist Spots</h1>,
            },
            {
                path: "/add_tourist_spot",
                element: <h1>Add Tourist Spot</h1>,
            },
            {
                path: "/my_list",
                element: <h1>My List</h1>,
            },
        ],
    },
]);

export default router;
