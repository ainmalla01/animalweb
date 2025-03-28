import React from "react";
import Tigerimg from '../imgsrc/tiger.jpg';
import Catimg from '../imgsrc/cat.jpg';
import '../css/home.css';

const Home=()=>{

    return(
        <>
        <section className="relative text-white bg-blue-600 h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <img src={Tigerimg} alt="Tiger" className=" w-full h-full  z-1" />

        {/* Overlay Content */}
        <div className="absolute left-20 top-20 h-[80%] w-[40%] bg-transparent  p-6 flex flex-col gap-2">
            <div className="h-[5vh] w-[10vw] bg-orange-600"></div>
            <div className="relative items-center justify-center w-full">
                <h2 className="text-[40px] font-bold tracking-widest text-black">PROTECT OUR 
                    <span className="text-orange-700 mx-[0.2em]">WILDLIFE</span></h2>
                    <p className="mx-[0.5em]">Our planet is home to countless species, each playing a vital role in maintaining the balance of nature.
                         Sadly, many of these species are facing extinction due to habitat loss, poaching, and climate change. 
                         It’s time to act. Join us in protecting wildlife and preserving the beauty and diversity of our world for 
                         future generations</p>
                
                </div>

                <div className="absolute h-[5vh] w-[20vw] bg-black text-white -bottom-[12%] p-6 text-center flex justify-center items-center">
  GET INVOLVED
</div>

         
        </div>
    </section>
    <section className="h-[30vh] w-full flex p-5 px-20 justify-between items-center">
        <h1 className="h-[15vh] w-[10vw]  text-[35px] p-6 text-orange-600  font-bold tracking-wide">40k <p className="text-[18px] text-black font-normal">Endangered spacies</p></h1>
        <h1 className="h-[15vh] w-[10vw]  text-[35px] p-6 text-orange-600 font-bold tracking-wide">800 <p className="text-[18px] text-black font-normal">Volunteers</p></h1>
        <h1 className="h-[15vh] w-[10vw]  text-[35px] p-6 text-orange-600 font-bold tracking-wide">140 <p className="text-[18px] text-black font-normal">Conversation Programs</p></h1>
        <h1 className="h-[15vh] w-[15vw]  text-[35px] p-6 text-orange-600 font-bold tracking-wide">1 <p className="text-[18px] text-black font-normal ">Earth for us to proctect</p></h1>
    </section>
    <section className="h-[30vh] w-full bg-blue-600 flex flex-row">
        <div className="h-full w-[40%] bg-black text-white p-5 px-20 tracking-wide  text-[20px] font-bold tracking-wide flex flex-col gap-2">
           
        <h1>About Us</h1>
        <p className="text-[12px] font-normal tracking-wide">Protecting animals for a better future—join us in saving lives and preserving nature!</p>
        </div>
        <div className="h-full w-[20%] bg-red-600  border-none ">
            <img src={Catimg} alt="" srcset="" className="h-full w-full border-none" />
        </div>
        <div className="h-full w-[40%] bg-blue-500 p-5 px-20 text-white text-[20px] font-bold tracking-wide flex flex-col gap-2">
            <h1>Upcoming project fund</h1>
            <p className="text-[12px] font-normal tracking-wide">Exciting new project coming soon! We're working on something impactful to make a difference. Stay connected for updates and be part of the change!</p>
        </div>

    </section>
    </>
    
    
    )
}
export default Home;