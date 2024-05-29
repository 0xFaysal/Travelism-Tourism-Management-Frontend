import {Link, useNavigate} from "react-router-dom";
import google from "../../assets/google.svg";
import github from "../../assets/github-mark.svg";
import image from "../../assets/pic4-min (1).jpg";
import {useContext, useState} from "react";
import {FaEye, FaEyeSlash, FaCheckCircle} from "react-icons/fa";
import {AuthContext} from "../../provider/AuthProvider";

function SignUp() {
    //all the states
    const [password, setPassword] = useState("");

    //context API
    const {
        signInWithGoogle,
        signInWithGithub,
        signUpWithEmailAndPassword,
        profileUpdate,
    } = useContext(AuthContext);

    const navigate = useNavigate();

    //Google Sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //Github Sign In
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //Form Submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        console.log(name, photoUrl, email, password);

        //sign up with email and password
        signUpWithEmailAndPassword(email, password)
            .then(() => {
                profileUpdate(name, photoUrl)
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //Password Show Hide and Validation
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passUpperCase, setPassUpperCase] = useState(false);
    const [passLowerCase, setPassLowerCase] = useState(false);
    const [passLength, setPassLength] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (newPassword.match(/[A-Z]/)) {
            setPassUpperCase(true);
        } else {
            setPassUpperCase(false);
        }
        if (newPassword.match(/[a-z]/)) {
            setPassLowerCase(true);
        } else {
            setPassLowerCase(false);
        }
        if (newPassword.length >= 6) {
            setPassLength(true);
        } else {
            setPassLength(false);
        }
    };

    return (
        <div className='w-ful h-screen my-28 px-28 grid place-items-center'>
            <div className='flex justify-center items-stretch h-full'>
                <div
                    className='w-96 p-6 px-24 bg-white rounded-lg shadow-lg flex-grow'
                    data-theme='light'
                >
                    <h3 className='mb-2 text-gray-600 font-bold text-left'>
                        Welcome to Travelism
                    </h3>
                    <h1 className='text-4xl font-bold text-left'>Sign Up</h1>
                    <form onSubmit={handleFormSubmit} className='mt-8'>
                        <div className='mb-5'>
                            <label
                                htmlFor='name'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Your Name'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='photourl'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Photo URL
                            </label>
                            <input
                                type='text'
                                id='photourl'
                                name='photourl'
                                placeholder='Your Photo URL'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                            />
                        </div>
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
                        <div className='mb-5 relative'>
                            <label
                                htmlFor='password'
                                className='block mb-2 text-sm font-medium text-gray-600'
                            >
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                onFocus={() => setPasswordFocus(true)}
                                onKeyUp={handlePassword}
                                id='password'
                                name='password'
                                placeholder='Your Password'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100'
                            />
                            <div
                                onClick={handleShowPassword}
                                className='absolute top-1/2 translate-y-1 right-3 text-xl'
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        {passwordFocus && (
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <FaCheckCircle
                                        className={
                                            passUpperCase
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }
                                    />
                                    <p>
                                        Must have an Uppercase letter in the
                                        password
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaCheckCircle
                                        className={
                                            passLowerCase
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }
                                    />
                                    <p>
                                        Must have a Lowercase letter in the
                                        password
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaCheckCircle
                                        className={
                                            passLength
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }
                                    />
                                    <p>Length must be at least 6 character</p>
                                </div>
                            </div>
                        )}
                        <button
                            type='submit'
                            className='w-full px-3 py-4 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'
                        >
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <p className='mt-4 text-sm'>
                            Already have an account?{" "}
                            <Link
                                to='/login'
                                className='text-blue-500 hover:underline'
                            >
                                Login
                            </Link>
                        </p>
                        <div>
                            <p className='mt-6 text-gray-600 font-bold text-center'>
                                Or Sign Up With
                            </p>
                            <div className='flex justify-center gap-4 mt-6'>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className='p-2 w-fit items-center flex font-medium border border-blue-500 rounded-md'
                                >
                                    <img width={50} src={google} alt='' />
                                    <p>Google</p>
                                </button>
                                <button
                                    onClick={handleGithubSignIn}
                                    className='p-2 gap-3 w-fit items-center flex font-medium border border-blue-500 rounded-md'
                                >
                                    <img width={30} src={github} alt='' />
                                    <p>Github</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 -ml-4 hidden lg:block shadow-lg flex-grow relative'>
                    <img
                        className='w-full object-cover h-full rounded-r-lg'
                        src={image}
                        alt=''
                    />
                    <div className='absolute w-full  bottom-20 px-5 text-white font-raleway font-semibold text-2xl'>
                        <p>
                            <span className='text-4xl'>&quot;</span>The world is
                            a book, and those who do not travel read only a
                            page.<span className='text-4xl'>&quot;</span>
                        </p>
                        <p className='text-right  text-lg'>– Unknown</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
