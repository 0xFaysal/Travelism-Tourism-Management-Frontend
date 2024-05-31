import "./Hero.css";
import video from "../../assets/video.mp4";
import {Typewriter} from "react-simple-typewriter";
import {FaAngleDoubleRight, FaAngleDoubleDown} from "react-icons/fa";

function Hero() {
    return (
        <div className='w-full h-screen bg-black top-0 left-0'>
            <div className='parent-of-back-video'>
                <video
                    className='back-video'
                    src={video}
                    autoPlay
                    loop
                    muted
                ></video>
                <div className='z-20 absolute top-1/2 left-1/2 w-full flex items-center justify-center flex-col -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-serif tracking-widest subpixel-antialiased text-5xl text-center  md:text-8xl font-bold '>
                        <span className='text-white'>Explore The</span>
                        <span className='text-accent block lg:inline mt-3 md:mt-0'>
                            <Typewriter
                                words={[
                                    " Life",
                                    " World",
                                    " Nature",
                                    " Beauty",
                                    " Adventure",
                                    " Culture",
                                    " History",
                                    " Tradition",
                                    " People",
                                    " Places",
                                    " Journey",
                                    " Experience",
                                    " Moment",
                                    " Memory",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium capitalize text-center text-white text-lg md:text-xl mt-5'>
                        What we offer is an unforgettable journey and experience
                    </p>
                    <button className='font-raleway backdrop-blur-md flex gap-3 items-center text-accent rounded-lg font-semibold text-xl px-10 py-3 border-2 border-accent mt-16'>
                        <p>Explore</p> <FaAngleDoubleRight />
                    </button>
                    <a href='#first'>
                        <button className='font-bold text-4xl relative top-48 animate-bounce text-white'>
                            <FaAngleDoubleDown />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
