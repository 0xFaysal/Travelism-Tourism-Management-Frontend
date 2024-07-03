import {useContext} from "react";
import {AuthContext} from "./../../provider/AuthProvider";

function Profile() {
    const {user} = useContext(AuthContext);
    console.log(user);

    const {displayName, email, phoneNumber, metadata, photoURL} = user;
    return (
        <div className='w-full h-screen my-28 px-18 flex flex-col items-center md:px-28'>
            <div className='avatar'>
                <div className='w-56 rounded-full'>
                    <img src={photoURL} />
                </div>
            </div>
            <div className='flex flex-col items-center mt-7 space-y-4'>
                <h1 className='text-4xl font-bold'>{displayName}</h1>
                <p className='text-xl'>
                    <span className='font-semibold'>Email:</span>
                    <span> {email}</span>
                </p>
                {phoneNumber && (
                    <p className='text-xl'>
                        <span className='font-semibold'>Phone:</span>
                        <span>{phoneNumber}</span>
                    </p>
                )}
                <p className='text-xl'>
                    <span className='font-semibold'>Creation Time: </span>
                    <span>{metadata?.creationTime}</span>
                </p>
                <p className='text-xl'>
                    <span className='font-semibold'>Last Sing In Time: </span>
                    <span>{metadata?.lastSignInTime}</span>
                </p>
            </div>
        </div>
    );
}

export default Profile;
