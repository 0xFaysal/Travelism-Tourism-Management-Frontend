import "./style.css";
import {Fade} from "react-awesome-reveal";

import {MdOutlineEmail} from "react-icons/md";
function ContactUs() {
    return (
        <div className='container mx-auto mt-28 mb-20'>
            <Fade
                // direction='up'
                // triggerOnce
                duration={1500}
                cascade
                className='w-full h-full  grid place-items-center'
            >
                <div className='w-11/12 h-full rounded-3xl bg-image py-36 grid place-items-center'>
                    <h3 className='uppercase font-semibold font-raleway'>
                        Do need out help?
                    </h3>
                    <h1 className='font-bold text-4xl md:text-8xl text-center'>
                        Contact us for help <br /> or information
                    </h1>
                    <p>We provide through the button below.</p>
                    <div className='border-2 border-base-content px-3 py-2 rounded-full backdrop-blur-lg mt-12 '>
                        <MdOutlineEmail className='text-base-content text-xl md:text-3xl inline ml-2' />
                        <input
                            type='text'
                            className='bg-transparent outline-none border-none font-medium text-lg text-base-content placeholder:text-base-content ml-2 w-40 md:w-80 py-2'
                            placeholder='Enter your email'
                        />
                        <button className='bg-base-content text-secondary  px-4 md:px-8 font-medium py-2 rounded-full'>
                            Submit
                        </button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default ContactUs;
