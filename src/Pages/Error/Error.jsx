import Lottie from "react-lottie";
import * as animationData from "../../assets/Animation - 1717132393058.json";
import {Link} from "react-router-dom";
import "animate.css";

function Error() {
    const defaultOptions = {
        loop: true,
        autoplay: true,

        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className='w-full h-screen grid place-items-center'>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={false}
            />

            <div className='flex gap-3 items-center justify-center mt-10 text-4xl font-bold text-center'>
                <h1 className='text-4xl font-bold text-center'>Return to</h1>
                <Link
                    to='/'
                    className='text-blue-500 border px-3 py-2 border-blue-500 animate__animated animate__headShake animate__infinite'
                >
                    {" "}
                    Home
                </Link>
            </div>
        </div>
    );
}

export default Error;
