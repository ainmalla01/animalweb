import React from "react";
import {Link} from "react-router-dom";
import '../css/navbar.css';
import Img from '../imgsrc/logo1.png';



const Navbar=()=>{
    return(
        <>
        <header className="text-white bg-white h-16">
        <nav className="flex mx-auto justify-between items-center h-full ">
            <ul className="flex h-full">
                <li className="h-full w-34 bg-white flex items-center justify-center outline-none border-none">
                {/* hover:bg-blue-400 */}
                    <Link to="/home"><img src={Img} alt="tiger image" /></Link>
                </li>
            </ul>
            <ul className="flex h-full justify-center">
                <li className="h-full w-24 bg-white-600 flex items-center justify-center text-black hover:bg-black-4  ">
                    <Link to="/login">Log in</Link>
                </li>
                <li className="h-full w-24 bg-red-600 flex items-center justify-center hover:bg-red-400 ">
                    <Link to="/donatenow">Donate now</Link>
                </li>
                <li className="h-full w-24 bg-yellow-600 flex items-center justify-center hover:bg-yellow-400 ">
                    <Link to="/takeaction">Take Action</Link>
                </li>
                <li className="h-full w-24 bg-black flex items-center justify-center hover:bg-black-400 ">
                    <Link to="/menudesign">Menu</Link>
                </li>
            </ul>
        </nav>

    </header>
   

    </>
    
    
    
    
    );
}
export default Navbar;