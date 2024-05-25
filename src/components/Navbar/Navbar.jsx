import {NavLink} from "react-router-dom";
import "./style.css";
import {useEffect, useState} from "react";
import {BsMoonStarsFill} from "react-icons/bs";
import {PiSunBold} from "react-icons/pi";

function Navbar() {
    const [theme, setTheme] = useState("light");
    const [navbarBackground, setNavbarBackground] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleThemeChange = () => {
        console.log("theme changed");
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        console.log({theme}); // apply the theme to the body
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
            setNavbarBackground(currentScrollPos > 80);
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible, navbarBackground]);

    const navItem = (
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <a>Tourist Spots</a>
            </li>
            <li>
                <a>About Us</a>
            </li>
        </>
    );

    return (
        <div
            className={` w-full transition z-50 top-0 ${
                navbarBackground ? "bg-primary" : ""
            }${visible ? " fixed" : " absolute"}`}
        >
            <div className='navbar top-0 px-8'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost lg:hidden'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            {navItem}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src='./favicon.svg' alt='logo' className='w-16' />
                        <a className='font-raleway text-2xl uppercase text-base-content  font-bold'>
                            Tavelism
                        </a>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='flex gap-6 navLink font-medium text-base px-1'>
                        {navItem}
                    </ul>
                </div>
                <div className='navbar-end space-x-6'>
                    <button
                        className='btn btn-ghost font-bold text-2xl'
                        onClick={handleThemeChange}
                    >
                        {theme === "light" ? (
                            <BsMoonStarsFill />
                        ) : (
                            <PiSunBold />
                        )}
                    </button>
                    <div className='space-x-4'>
                        <button className='btn btn-secondary'>Sign Up</button>
                        <button className='btn btn-accent'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
