import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="inter">
            <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;