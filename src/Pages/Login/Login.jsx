import {Link} from "react-router-dom";
import google from "../../assets/google.svg";
import github from "../../assets/github-mark.svg";
import image from "../../assets/pic5.jpg";

function Login() {
    return (
        <div className='w-ful h-screen my-28 grid px-28 place-items-center'>
            <div className='flex justify-center items-stretch h-full'>
                <div
                    className='w-96 p-6 px-24 pt-12 bg-white rounded-lg shadow-lg flex-grow'
                    data-theme='light'
                >
                    <h1 className='text-3xl font-bold text-center'>Login</h1>
                    <form className='mt-6'>
                        <div className='mb-5'>
                            <label
                                htmlFor='email'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Your Email'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='password'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='Your Password'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full px-3 py-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'
                        >
                            Login
                        </button>
                    </form>
                    <div>
                        <p className='mt-4 text-sm'>
                            Don&apos;t have an account?{" "}
                            <Link
                                to='/signup'
                                className='text-blue-500 hover:underline'
                            >
                                Sign Up
                            </Link>
                        </p>
                        <div>
                            <p className='mt-6 text-gray-600 font-bold text-center'>
                                Or Login With
                            </p>
                            <div className='flex justify-center gap-4 mt-6'>
                                <button className='p-2 w-fit items-center flex font-medium border border-blue-500 rounded-md'>
                                    <img width={50} src={google} alt='' />
                                    <p>Google</p>
                                </button>
                                <button className='p-2 gap-3 w-fit items-center flex font-medium border border-blue-500 rounded-md'>
                                    <img width={30} src={github} alt='' />
                                    <p>Github</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 -ml-4 hidden lg:block shadow-lg flex-grow relative'>
                    <img
                        className=' object-cover h-full rounded-r-lg'
                        src={image}
                        alt=''
                    />
                    <div className='absolute  bottom-20 px-5 text-white font-raleway font-semibold text-2xl'>
                        <p>
                            <span className='text-4xl'>&quot;</span>
                            The world is a classroom, open your mind and wander.
                            <span className='text-4xl'>&quot;</span>
                        </p>
                        <p className='text-right  text-lg'>– Unknown</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
