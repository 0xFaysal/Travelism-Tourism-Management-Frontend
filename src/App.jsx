import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <div>
                <Navbar />
                <Outlet />
                <ToastContainer />
                <Footer />
            </div>
        </div>
    );
}

export default App;
//#E7AD27
//#FEDE3A
//#F7CB15
// #382B73
// #473080
// #009ADD
// #1CAEE4
// #136DA0
// #D1D3D4
//#222831
