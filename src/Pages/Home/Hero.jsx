import "./Hero.css";
import video from "../../assets/video.mp4";
function Hero() {
    return (
        <div className='w-full bg-black'>
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
