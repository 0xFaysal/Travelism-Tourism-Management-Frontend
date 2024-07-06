import {Helmet} from "react-helmet";
import PropTypes from "prop-types";

function Header({title}) {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <title>{title} | Travelism</title>
        </Helmet>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
