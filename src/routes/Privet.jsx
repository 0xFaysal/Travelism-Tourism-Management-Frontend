import {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import {Navigate} from "react-router-dom";
import {PropTypes} from "prop-types";

function Privet({children}) {
    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return (
            <div className='mt-15 h-screen w-full grid place-items-center'>
                <span className='loading loading-bars loading-lg'></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate to='/signup' />;
    }

    return <>{children}</>;
}

export default Privet;

Privet.propTypes = {
    children: PropTypes.node,
};
