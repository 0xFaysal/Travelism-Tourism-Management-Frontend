import {GiChessQueen, GiWorld} from "react-icons/gi";
import img1 from "../../assets/sasha-kaunas-xEaAoizNFV8-unsplash.jpg";
// import img2 from "../../assets/";
import img3 from "../../assets/the-10-most-beautiful-places-in-bangladesh-04.jpg";
import img4 from "../../assets/valeriy-ryasnyanskiy-bduYp1pYxjM-unsplash.jpg";
import img5 from "../../assets/chelsea-gates-0653_wY0nRc-unsplash (1).jpg";

import {MdMarkEmailRead, MdOutlinePriceCheck} from "react-icons/md";
function WhyUS() {
    return (
        <section className='container mx-auto mt-24 px-16'>
            <div>
                <h2 className='text-center font-semibold text-accent uppercase md:text-lg text-base'>
                    Why In Travelism?
                </h2>
                <h1 className='text-center font-bold text-3xl md:text-5xl mt-3 mb-8'>
                    We insure that your travel process <br /> is perfectly
                    accommodated.
                </h1>
            </div>
            <div className='flex w-full flex-wrap lg:flex-nowrap gap-10 px-8 justify-center items-center"'>
                <div className='flex items-center justify-center flex-col text-center  w-96'>
                    <div className='bg-blue-100 shadow-lg w-12 h-12 border-4 text-lg border-base-100 text-blue-600 flex items-center justify-center rounded-full'>
                        <GiChessQueen />
                    </div>
                    <h1 className='font-medium text-xl capitalize mt-2'>
                        Best travel provider
                    </h1>
                    <p className='text-wrap mt-4 text-sm'>
                        We are the best travel provider in the market. We have a
                        wide range of travel plans for you. We ensure that you
                        get the best travel experience with us.
                    </p>
                </div>
                <div className='flex items-center justify-center flex-col text-center w-96 '>
                    <div className='bg-blue-100 shadow-lg w-12 h-12 border-4 text-lg border-base-100 text-blue-600 flex items-center justify-center rounded-full'>
                        <GiWorld />
                    </div>
                    <h1 className='font-medium text-xl capitalize mt-2'>
                        Experienced agent
                    </h1>
                    <p className='text-wrap mt-4 text-sm'>
                        Our experienced agents are always ready to help you with
                        your travel plan. They are well trained and experienced
                        to provide you with the best service.
                    </p>
                </div>
                <div className='flex items-center justify-center flex-col text-center w-96 '>
                    <div className='bg-blue-100 shadow-lg w-12 h-12 border-4 text-lg border-base-100 text-blue-600 flex items-center justify-center rounded-full'>
                        <MdOutlinePriceCheck />
                    </div>
                    <h1 className='font-medium text-xl capitalize mt-2'>
                        Best Price Guarantee
                    </h1>
                    <p className='text-wrap mt-4 text-sm'>
                        We provide the best price for your travel plan with no
                        hidden charges. We ensure that you get the best deal for
                        your travel plan. For your convenience, we provide a
                        price comparison feature.
                    </p>
                </div>
                <div className='flex items-center justify-center flex-col text-center  w-96'>
                    <div className='bg-blue-100 shadow-lg w-12 h-12 border-4 text-lg border-base-100 text-blue-600 flex items-center justify-center rounded-full'>
                        <MdMarkEmailRead />
                    </div>
                    <h1 className='font-medium text-xl capitalize mt-2'>
                        Personalized Service
                    </h1>
                    <p className='text-wrap mt-4 text-sm'>
                        We know that every traveler is different. As your
                        interests come before any program we can offer, we
                        provide personalized services to make your travel plan
                        more enjoyable.
                    </p>
                </div>
            </div>
            <div className=' grid grid-cols-3 grid-rows-2 w-full mt-12 h-[45rem] gap-4'>
                <div className='col-span-3 lg:col-span-2 '>
                    <img
                        src={img1}
                        alt=''
                        className='w-full h-full object-cover object-center rounded-lg'
                    />
                </div>
                <div className=' col-span-3 md:col-span-1 lg:row-span-2'>
                    <img
                        src={img5}
                        alt=''
                        className='w-full h-full object-cover object-bottom rounded-lg'
                    />
                </div>
                <div className='col-span-3 md:col-span-1'>
                    <img
                        src={img3}
                        alt=''
                        className='w-full h-full object-cover object-bottom rounded-lg'
                    />
                </div>
                <div className='col-span-3 md:col-span-1'>
                    <img
                        src={img4}
                        alt=''
                        className='w-full h-full object-cover object-bottom rounded-lg'
                    />
                </div>
            </div>
        </section>
    );
}

export default WhyUS;
