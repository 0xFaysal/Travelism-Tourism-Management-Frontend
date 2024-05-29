import "./Hero.css";
import video from "../../assets/video.mp4";
function Hero() {
    return (
        <div className='w-full h-screen bg-black absolute top-0 left-0'>
            <div className='parent-of-back-video'>
                <video
                    className='back-video'
                    src={video}
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
        </div>
    );
}

export default Hero;
