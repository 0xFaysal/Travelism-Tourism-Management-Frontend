import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto'>
                <Outlet />
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
