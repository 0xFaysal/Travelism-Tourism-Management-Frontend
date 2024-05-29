// import {Fade} from "react-awesome-reveal";
// import {Slide} from "react-awesome-reveal";
import {FaArrowRight} from "react-icons/fa";

import img1 from "../../assets/the-10-most-beautiful-places-in-bangladesh-04.jpg";
import img2 from "../../assets/thailand-in-pictures-most-beautiful-places-doi-inthanon-national-park.jpg";
import img3 from "../../assets/LANGKAWI.jpg";
import img4 from "../../assets/180403062612-03-most-beautiful-places-in-vietnam-restricted.jpg";
import img5 from "../../assets/1_VnT2NnUgJOgkiYtgv-Tfjg.jpg";
// import {Slide} from "react-awesome-reveal";
import {Fade} from "react-awesome-reveal";

function MostVisitedCountryList() {
    return (
        <div className='mt-16 px-8' id='first'>
            <Fade
                direction='up'
                triggerOnce
                duration={800}
                cascade
                damping={0.75}
            >
                <h2 className='text-accent font-medium text-lg'>
                    Most Visited Countries
                </h2>
                <h1 className='font-bold text-3xl mt-3'>
                    Explore Beautiful Places Around The World.
                </h1>
                <div className='carousel carousel-center p-4 space-x-4 rounded-box mt-6'>
                    <div className='carousel-item flex-col gap-y-0'>
                        <img
                            src={img1}
                            className='rounded-box w-72 h-96 object-cover'
                        />
                        <h1 className='text-xl font-semibold mt-4'>
                            Travel to Bangladesh
                        </h1>
                        <p className='text-accent'>
                            See more <FaArrowRight className='inline text-sm' />
                        </p>
                    </div>
                    <div className='carousel-item flex-col gap-y-0'>
                        <img
                            src={img2}
                            className='rounded-box w-72 h-96 object-cover'
                        />
                        <h1 className='text-xl font-semibold mt-4'>
                            Travel to Thailand
                        </h1>
                        <p className='text-accent'>
                            See more <FaArrowRight className='inline text-sm' />
                        </p>
                    </div>
                    <div className='carousel-item flex-col gap-y-0'>
                        <img
                            src={img3}
                            className='rounded-box w-72 h-96 object-cover'
                        />
                        <h1 className='text-xl font-semibold mt-4'>
                            Travel to Malaysia
                        </h1>
                        <p className='text-accent'>
                            See more <FaArrowRight className='inline text-sm' />
                        </p>
                    </div>
                    <div className='carousel-item flex-col gap-y-0'>
                        <img
                            src={img4}
                            className='rounded-box w-72 h-96 object-cover'
                        />
                        <h1 className='text-xl font-semibold mt-4'>
                            Travel to Vietnam
                        </h1>
                        <p className='text-accent'>
                            See more <FaArrowRight className='inline text-sm' />
                        </p>
                    </div>
                    <div className='carousel-item flex-col gap-y-0'>
                        <img
                            src={img5}
                            className='rounded-box w-72 h-96 object-cover'
                        />
                        <h1 className='text-xl font-semibold mt-4'>
                            Travel to Cambodia
                        </h1>
                        <p className='text-accent'>
                            See more <FaArrowRight className='inline text-sm' />
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default MostVisitedCountryList;
