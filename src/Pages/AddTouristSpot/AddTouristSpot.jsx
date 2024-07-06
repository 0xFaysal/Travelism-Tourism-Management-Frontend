import {useContext, useState} from "react";
import Card from "./../../components/Card/Card";
import {AuthContext} from "../../provider/AuthProvider";
import swal from "sweetalert";
import Header from "../../utility/Header";

function AddTouristSpot() {
    const [touristSpotName, setTouristSpotName] = useState(
        "Default Tourist Spot"
    );
    const [photoUrl, setPhotoUrl] = useState(
        "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
    );
    const [countryName, setCountryName] = useState("Default Country");
    const [location, setLocation] = useState("Default Location");
    const [description, setDescription] = useState(
        "Default Description..............."
    );
    const [averageCost, setAverageCost] = useState(0);
    const [seasonality, setSeasonality] = useState("Default");
    const [travelTime, setTravelTime] = useState(0);
    const [totalVisitorsPerYear, setTotalVisitorsPerYear] = useState(0);

    const {user} = useContext(AuthContext);

    const data = {
        userId: user?.uid,
        userName: user?.displayName || "Anonymous",
        userEmail: user?.email || "example@email.com",
        tourists_spot_name: touristSpotName,
        country_name: countryName,
        location: location,
        description: description,
        average_cost: averageCost,
        seasonality: seasonality,
        travel_time: travelTime,
        total_visitors_per_year: totalVisitorsPerYear,
        user_photo:
            user?.photoURL ||
            "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
        image: photoUrl,
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch("https://travelism-xi.vercel.app/api/v1/insert/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    e.target.reset();
                    swal({
                        title: "Success!",
                        text: "Tourist Spot Added Successfully",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Error!",
                        text: "Failed to Add Tourist Spot",
                        icon: "error",
                    });
                }
            })
            .catch(() => {
                swal({
                    title: "Error!",
                    text: "Failed to Add Tourist Spot",
                    icon: "error",
                });
            });
    };

    return (
        <div className='container mx-auto mt-24 mb-12'>
            <Header title='Add Tourist Spot' />
            <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center gap-20'>
                <div
                    className='p-6 px-12 lg:px-24 pt-12 bg-white rounded-lg shadow-lg'
                    data-theme='light'
                >
                    <h1 className='text-3xl font-bold text-center'>
                        Add New Tourist Spot
                    </h1>
                    <form onSubmit={handleFormSubmit} className='mt-6'>
                        <div className='mb-5'>
                            <label
                                htmlFor='tourist_spot_name'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Tourist Spot Name
                            </label>
                            <input
                                type='text'
                                onChange={(e) => {
                                    setTouristSpotName(e.target.value);
                                }}
                                id='tourist_spot_name'
                                name='tourist_spot_name'
                                placeholder='Tourist Spot Name'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                required
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='photo_url'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Photo URL
                            </label>
                            <input
                                type='text'
                                id='photo_url'
                                onBlur={(e) => {
                                    setPhotoUrl(e.target.value);
                                }}
                                name='photo_url'
                                placeholder='Photo URL'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                required
                            />
                        </div>
                        <div className='mb-5 flex justify-between items-center gap-4'>
                            <div>
                                <label
                                    htmlFor='country_name'
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                >
                                    Country
                                </label>
                                <select
                                    id='country_name'
                                    name='country_name'
                                    onChange={(e) => {
                                        setCountryName(e.target.value);
                                    }}
                                    className='block w-full px-6 md:px-8 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                    required
                                >
                                    <option value=''>Select Country</option>
                                    <option value='Bangladesh'>
                                        Bangladesh
                                    </option>
                                    <option value='Thailand'>Thailand</option>
                                    <option value='Indonesia'>Indonesia</option>
                                    <option value='Malaysia'>Malaysia</option>
                                    <option value='Vietnam'>Vietnam</option>
                                    <option value='Cambodia'>Cambodia</option>
                                </select>
                            </div>
                            <div className=''>
                                <label
                                    htmlFor='location'
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                >
                                    Location
                                </label>
                                <input
                                    type='text'
                                    id='location'
                                    onChange={(e) => {
                                        setLocation(e.target.value);
                                    }}
                                    name='location'
                                    placeholder='Location'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                    required
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='description'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Description
                            </label>
                            <textarea
                                type='text'
                                id='email'
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                name='email'
                                rows={"4"}
                                placeholder='Description'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                required
                            />
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='mb-5'>
                                <label
                                    htmlFor='average_cost'
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                >
                                    Average Cost
                                </label>
                                <input
                                    type='text'
                                    id='average_cost'
                                    onChange={(e) => {
                                        setAverageCost(e.target.value);
                                    }}
                                    name='average_cost'
                                    placeholder='Average Cost'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                    required
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                    htmlFor='time'
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                >
                                    Travel Time
                                </label>
                                <input
                                    type='text'
                                    id='time'
                                    name='time'
                                    onChange={(e) => {
                                        setTravelTime(e.target.value);
                                    }}
                                    placeholder='Travel Time'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                    required
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='mb-5'>
                                <label
                                    htmlFor='seasonality'
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                >
                                    Seasonality
                                </label>
                                <select
                                    id='seasonality'
                                    name='seasonality'
                                    onChange={(e) => {
                                        setSeasonality(e.target.value);
                                    }}
                                    className='block w-full px-6 md:px-8 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                    required
                                >
                                    <option value=''>Select Seasonality</option>
                                    <option value='Winter'>Winter</option>
                                    <option value='Spring'>Spring</option>
                                    <option value='Summer'>Summer</option>
                                    <option value='Monsoon'>Monsoon</option>
                                    <option value='Autumn'>Autumn</option>
                                    <option value='Pre-Winter'>
                                        Pre-Winter
                                    </option>
                                </select>
                            </div>
                            <div className='mb-5'>
                                <label
                                    htmlFor='total_visitors_per_year'
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                >
                                    Total Visitors Per Year
                                </label>
                                <input
                                    type='text'
                                    id='total_visitors_per_year'
                                    onChange={(e) => {
                                        setTotalVisitorsPerYear(e.target.value);
                                    }}
                                    name='total_visitors_per_year'
                                    placeholder='Total Visitors Per Year'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='w-full px-3 py-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'
                        >
                            Add
                        </button>
                    </form>
                </div>
                <Card data={data} buttonType='disabled' />
            </div>
        </div>
    );
}

export default AddTouristSpot;
