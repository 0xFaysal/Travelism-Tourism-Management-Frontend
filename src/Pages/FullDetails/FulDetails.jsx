import {useLoaderData} from "react-router-dom";
import Header from "../../utility/Header";

function FulDetails() {
    const data = useLoaderData();

    const {
        tourists_spot_name,
        country_name,
        location,
        description,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
        userName,
        userEmail,
        user_photo,
        image,
    } = data;
    return (
        <section className='container mx-auto mt-24 mb-12'>
            <Header title={tourists_spot_name} />
            <div className='w-full flex flex-col items-center px-8 md:px-20 lg:px-36 gap-y-4'>
                <img
                    src={image}
                    className='w-full object-cover'
                    alt={tourists_spot_name}
                />

                <div className='space-y-3'>
                    <h1 className='font-bold text-2xl md:text-4xl'>
                        Spot Name : {tourists_spot_name}
                    </h1>
                    <h2 className='font-semibold text-xl md:text-2xl'>
                        {" "}
                        Country : {country_name}
                    </h2>
                    <p className='font-semibold text-lg md:text-xl'>
                        {" "}
                        Location : {location}
                    </p>
                    <p>
                        {" "}
                        <span className='font-semibold text-xl'>
                            Description :
                        </span>{" "}
                        {description}
                    </p>
                    <p className='font-semibold text-xl'>
                        {" "}
                        Average cost : ${average_cost}
                    </p>
                    <p className='font-semibold text-xl'>
                        {" "}
                        Seasonality : {seasonality}
                    </p>
                    <p className='font-semibold text-xl'>
                        {" "}
                        Travel Time : {travel_time}day
                    </p>
                    <p className='font-semibold text-xl'>
                        {" "}
                        Total View : {total_visitors_per_year} / year
                    </p>
                    <hr
                        style={{
                            color: "black",
                            backgroundColor: "black",
                            height: 1,
                        }}
                    />
                    <div className='flex flex-col items-center gap-4'>
                        <h1 className='font-bold text-2xl'>User Information</h1>
                        <img
                            src={user_photo}
                            alt={userName}
                            className='w-20 h-20 rounded-full ring ring-secondary ring-offset-base-100 object-center ring-offset-2'
                        />
                        <p className='font-bold text-xl user_info'>
                            {userName}
                        </p>
                        <p className='text-lg user_info'>{userEmail}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FulDetails;
