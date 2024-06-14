import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import Privet from "./Privet";
import TouristSpots from "../Pages/TouristSpots/TouristSpots";
import MyList from "../Pages/MyList/MyList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
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
                element: <TouristSpots></TouristSpots>,
            },
            {
                path: "/add_tourist_spot",
                element: (
                    <Privet>
                        <AddTouristSpot></AddTouristSpot>
                    </Privet>
                ),
            },
            {
                path: "/my_list",
                element: (
                    <Privet>
                        <MyList></MyList>
                    </Privet>
                ),
            },
            {
                path: "/profile",
                element: <h1>Profile</h1>,
            },
        ],
    },
]);

export default router;
