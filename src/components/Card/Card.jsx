import {IoLocationOutline} from "react-icons/io5";
import {LuCalendarDays} from "react-icons/lu";
import {PropTypes} from "prop-types";

function Card({data, buttonType = "enabled"}) {
    console.log(buttonType);
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
        <div>
            <div className='card card-compact relative w-96 bg-white shadow-xl'>
                <figure>
                    <img
                        src={image}
                        alt={tourists_spot_name}
                        className='h-72 object-cover'
                    />
                </figure>
                <div className='flex items-center gap-4 absolute top-2 left-4'>
                    <div className='avatar'>
                        <div className='w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2'>
                            <img src={user_photo} alt={userName} />
                        </div>
                    </div>
                    <div className='user_info'>
                        <h4 className='font-bold text-base user_info '>
                            {userName}
                        </h4>
                        <p className='text-xs'>{userEmail}</p>
                    </div>
                </div>
                <div className='card-body text-black'>
                    <h2 className='text-3xl font-bold font-serif'>
                        {tourists_spot_name}
                    </h2>
                    <div>
                        <p className='space-x-1 -mt-2 ml-1'>
                            <IoLocationOutline className='inline font-bold text-lg' />
                            <span>{country_name}</span>
                            <span>{location}</span>
                        </p>
                    </div>
                    <p className='line-clamp-2'>{description}</p>
                    <div>
                        <p className='text-base'>
                            Average Cost:{" "}
                            <span className='text-2xl font-bold font-raleway'>
                                ${average_cost}
                            </span>
                        </p>
                        <p className='text-base'>
                            <LuCalendarDays className='inline font-bold text-sm mr-1' />
                            Time:{" "}
                            <span className='text-xl font-semibold'>
                                {travel_time}
                            </span>{" "}
                            days
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm'>
                            Seasonality:{" "}
                            <span className='text-xl font-semibold'>
                                {seasonality}
                            </span>
                        </p>
                        <p className='font-medium text-2xl'>|</p>

                        <p className='text-sm'>
                            Total Visitors:{" "}
                            <span className='text-xl font-semibold'>
                                {total_visitors_per_year}
                            </span>
                            <span className='text-xs'>/ year</span>
                        </p>
                    </div>
                    <div className='card-actions mt-2 justify-center'>
                        {buttonType === "disabled" ? (
                            <button className='btn btn-disabled'>
                                View Detail
                            </button>
                        ) : (
                            <button className='btn btn-secondary'>
                                View Details
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    data: PropTypes.shape({
        tourists_spot_name: PropTypes.string,
        country_name: PropTypes.string,
        location: PropTypes.string,
        description: PropTypes.string,
        average_cost: PropTypes.number,
        seasonality: PropTypes.string,
        travel_time: PropTypes.string,
        total_visitors_per_year: PropTypes.number,
        userName: PropTypes.string,
        userEmail: PropTypes.string,
        user_photo: PropTypes.string,
        image: PropTypes.string,
    }),
    buttonType: PropTypes.string,
};
