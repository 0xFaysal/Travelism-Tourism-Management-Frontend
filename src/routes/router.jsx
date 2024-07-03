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
import FulDetails from "../Pages/FullDetails/FulDetails";
import Update from "../Pages/Update/Update";
import Profile from "../Pages/Profile/Profile";

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
                path: "/details/:id",
                element: (
                    <Privet>
                        <FulDetails></FulDetails>
                    </Privet>
                ),
                loader: ({params}) =>
                    fetch(`http://localhost:3000/api/v1/get/data=${params.id}`),
            },
            {
                path: "/update/:id",
                element: (
                    <Privet>
                        <Update></Update>
                    </Privet>
                ),
                loader: ({params}) =>
                    fetch(`http://localhost:3000/api/v1/get/data=${params.id}`),
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
                element: (
                    <Privet>
                        <Profile></Profile>
                    </Privet>
                ),
            },
        ],
    },
]);

export default router;
