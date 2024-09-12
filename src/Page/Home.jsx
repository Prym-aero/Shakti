import React, { useEffect, useRef, useState } from 'react'
import Logo from "../images/prym_logo.png"
import map from "../images/map.png"
import {GoDotFill} from "react-icons/go"
import Sun from "../logos/sun.png"    
 import Cld from "../logos/Cld.png"
 import Rain from "../logos/Rain.png"
 import Thund from "../logos/Thund.png"
 import Wave from "../logos/Wave.png"
 import cldAndSun from "../logos/cldAndSun.png"
import Map from '../component/Map'
import { IoInformationCircle } from "react-icons/io5";
import { GiDeliveryDrone } from "react-icons/gi";
import { TbDroneOff } from "react-icons/tb";
import { PiDroneThin } from "react-icons/pi";
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import animationData from "../Lottie/animation.json";


const Home = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  setTimeout(() => {
    setIsAnimationComplete(true)
  }, 600);
  return (
    <div className={`MainWrapper w-[100vw] h-[100vh] overflow-hidden relative  ${
          isAnimationComplete ? "animation" : ""
        }`}>
        
        <div
          className={`"lottie-animation-screen flex justify-center items-center h-screen w-[100%] pointer-events-none mx-auto absolute z-30 bg-[#4242426e] backdrop-blur-sm ${
            isAnimationComplete ? "hidden" : ""
          }`}
        >
          <Lottie
            animationData={animationData}
            loop={false} // Ensure the animation doesn't loop
            autoplay={true} // Automatically play the animation
            onComplete={() => setIsAnimationComplete(true)} // Trigger when the animation completes
            style={{ width: 350, height: 350 }}
          />
        </div>
        {/* // map background  start  */}
        <div className="map absolute top-0 left-0 right-0 bottom-0 z-10 ">
            <Map />
        </div>
        {/* map background end  */}

        {/* navbar start  */}
          <div className="navbar flex items-start justify-between relative z-20 ">

            {/* //left div  */}
            <div className="logo bg-[#0000005e p-1 px-4 shadow-lg ">
            <img src={Logo}alt="" className='w-[150px] ' />
            </div>

            {/* middle div  */}
            <div className="title bg-[#0000005e] text-4xl text-center text-white mt-2 font-bold px-4 py-1 relative backdrop-blur-sm">
                 {/* right line  */}
            <div className="rightline absolute -top-[1px] bg-transparent -right-[1px] h-[14px] w-4 border-t border-r border-blue-400"></div>
            <div className="rightline absolute  -bottom-[1px] bg-transparent -left-[1px] h-[14px] w-4 border-l border-b border-yellow-400"></div>
                S.<span className='text-blue-500'>H</span>.A.K.<span className='text-yellow-500'>T</span>.I
                </div>
           
           {/* right div  */}
           <div className="links flex justify-center items-center gap-1 mt-2"> 
                 
              {/* <div className="logout cursor-pointer relative backdrop-blur-md bg-[#0000002c] shadow-md text-lg text-center p-2 font-semibold px-2 text-white drop-shadow-[1px_1px_1px_black] hover:text-blue-400 ease-linear duration-200  rounded-xl hover:scale-105"> 
              <IoInformationCircle fontSize={"1.4rem"}/> 
              </div>

                <div className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black] ease-linear duration-200 hover:bg-[#0000002c] hover:rounded-md"> 
                profile </div>

                <div className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black]  ease-linear duration-200 hover:bg-[#0000002c] hover:rounded-md"> 
                FlightLog </div> */}

               <Link to="/">
               <div className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black]  ease-linear duration-200  hover:bg-red-300 hover:rounded-md mx-2"> 
               Log<span className='text-[crimsn]' >out</span> </div>
               </Link>
           
            </div>

            
           </div>
          {/* navbar end  */}

          {/* options menu start    */}
          <div className="options_menu absolute bg-[#0000005e shadow-md text-black backdrop-blur-md z-20 left-2 top-[30%] rounded-es-lg ">

            {/* //    right line  */}
               <div className="rightline absolute -top-[1px] bg-transparent -left-[1px] h-[50px] w-10 border-l-2 border-t-2 border-blue-400 z-20">  <div className="circle bg-blue-600 p-4 sticky z-10 blur-lg"></div>  </div>
            <div className="rightline absolute  -bottom-[1px] bg-transparent -right-[1px] h-[40px] w-10 border-r-2 border-b-2 border-yellow-400 z-20"> <div className="circle bg-yellow-600 p-2 sticky z-10 blur-lg"></div> </div>


            <Link to="/allDrones">
            <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md">ALL <span className='text-white drop-shadow-lg ' >DRONES</span>  <GoDotFill color='blue' className=' before:contents-[""] before:absolute before:animate-ping'/> </div>
            </Link>
            <Link to="/active">
            <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">ACTIVE <span className='text-white drop-shadow-lg mr-2' >DRONES</span> 
            <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
             </div></Link>
             <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">Flying <span className='text-white drop-shadow-lg mr-2' >DRONES</span> <span><GiDeliveryDrone className='text-blue-400' />
             </span>
             </div>
             <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">REPAIR <span className='text-white drop-shadow-lg mr-2' >DRONES</span> <span><PiDroneThin className='text-yellow-600' />
             </span>
             </div>
            <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">INACTIVE <span className='text-white drop-shadow-lg mr-2' >DRONES</span> <span><TbDroneOff className='text-red-400' />
             </span>
             </div>

          </div>
           
           {/* options wrapper start  */}
          {/* <div className="oprionsWQrapper relative z-40 w-fit" ref={cardRef}>
            
             <div className="options_menu w-fit bg-[#0000005e] backdrop-blur-md z-20 left-2 top-[30%] transition-colors rounded-es-lg  ">

               right line 
               <div className="rightline absolute -top-[1px] bg-transparent -left-[1px] h-[50px] w-10 border-l-2 border-t-2 border-blue-400 z-20">  <div className="circle bg-blue-600 p-4 sticky z-10 blur-lg"></div>  </div>
               <div className="rightline absolute  -bottom-[1px] bg-transparent -right-[1px] h-[40px] w-10 border-r-2 border-b-2 border-yellow-400 z-20"> <div className="circle bg-yellow-600 p-2 sticky z-10 blur-lg"></div> </div>


                <div className="option p-2 px-7 text-lg border-b-[1px] text-white text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md">ALL <span className='text-blue-200' >DRONES</span>  <GoDotFill color='blue'/> </div>
                <div className="option p-2 px-7 text-lg border-b-[1px] text-white text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md">ACTIVE <span className='text-blue-200' >DRONES</span>  <GoDotFill color='red'/> </div>
                <div className="option p-2 px-7 text-lg border-b-[1px] text-white text-center font-semibold border-black hover:scale-105 transition-all duration-200 ease-linear hover:border-none hover:shadow-md">FLYING <span className='text-blue-200' >DRONES</span> </div>
                <div className="option p-2 px-7 text-lg border-b-[1px] text-white text-center font-semibold border-black hover:scale-105 transition-all duration-200 ease-linear hover:border-none hover:shadow-md">REPAIR <span className='text-blue-200' >DRONES</span> </div>
                <div className="option p-2 px-7 text-lg text-white text-center font-semibold border-black hover:scale-105 transition-all duration-200 ease-linear hover:border-none hover:shadow-md">INACTIVE <span className='text-blue-200' >DRONES</span> </div>
          </div>
          option menmu end              

          options 2 start
             <div className="options_menu w-fit z-10 rounded-es-lg select-none pointer-events-none text-transparent absolute inset-0 custom-mask">

               right line 
               <div className="rightline absolute -top-[1px] bg-transparent -left-[1px] h-[50px] w-10 border-l-2 border-t-2 border-blue-400 z-20">  <div className="circle bg-blue-600 p-4 sticky z-10 blur-lg"></div>  </div>
               <div className="rightline absolute  -bottom-[1px] bg-transparent -right-[1px] h-[40px] w-10 border-r-2 border-b-2 border-yellow-400 z-20"> <div className="circle bg-yellow-600 p-2 sticky z-10 blur-lg"></div> </div>


                <p className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">ALL <span className='' >DRONES</span>  <GoDotFill color='blue'/> </p>
                <p className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md">ACTIVE <span className='' >DRONES</span>  <GoDotFill color='red'/> </p>
                <p className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black hover:scale-105 transition-all duration-200 ease-linear hover:border-none hover:shadow-md">FLYING <span className='' >DRONES</span> </p>
                <p className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black hover:scale-105 transition-all duration-200 ease-linear hover:border-none hover:shadow-md">REPAIR <span className='' >DRONES</span> </p>
                <p className="option p-2 px-7 text-lg text-center font-semibold border-black hover:scale-105 transition-all duration-200 ease-linear hover:border-none hover:shadow-md">INACTIVE <span className='' >DRONES</span> </p>
          </div>                       
          options 2 end 
          </div> */}
          {/* options wrapper end  */}

         

         {/* weather start  */}
          <div className="weather p-5 bg-[#0000005e text-black shadow-lg  rounded-ss-lg rounded-ee-lg backdrop-blur-md flex justify-around items-center gap-4 absolute mt-auto z-20 left-2 bottom-2 text-whit w-[400px] ">
               {/* right line  */}
               <div className="rightline absolute -top-[1px] bg-transparent -right-[1px] h-[50px] w-10 border-t-2 border-r-2 border-blue-400 z-20">  <div className="circle bg-blue-600 p-4 sticky z-10 blur-lg"></div>  </div>
            <div className="rightline absolute  -bottom-[1px] bg-transparent -left-[1px] h-[40px] w-10 border-l-2 border-b-2 border-yellow-400 z-20"> <div className="circle bg-yellow-600 p-2 sticky z-10 blur-lg"></div> </div>

            <div className="chgWeather flex justify-between items-center flex-col gap-6 relative z-30">
                <div className="time font-normal">Now</div>
                <div className="logo"> <img src={Sun} alt="" /> </div>
                <div className="temp font-medium">22 &deg;C</div>
            </div>
            <div className="chgWeather flex justify-between items-center flex-col gap-6 relative z-30">
                <div className="time font-medium">01<span className='font-normal text-xs's>AM</span> </div>
                <div className="logo"> <img src={Cld} alt="" /> </div>
                <div className="temp font-medium">24 &deg;C</div>
            </div>
            <div className="chgWeather flex justify-between items-center flex-col gap-6 relative z-30">
                <div className="time font-medium">03<span className='font-normal text-xs's>PM</span> </div>
                <div className="logo"> <img src={Rain} alt="" /> </div>
                <div className="temp font-medium">32 &deg;C</div>
            </div>
            <div className="chgWeather flex justify-between items-center flex-col gap-6 relative z-30">
                <div className="time font-medium">09<span className='font-normal text-xs's>AM</span> </div>
                <div className="logo"> <img src={Thund} alt="" /> </div>
                <div className="temp font-medium">34 &deg;C</div>
            </div>
            <div className="chgWeather flex justify-between items-center flex-col gap-6 relative z-30">
                <div className="time font-medium">11<span className='font-normal text-xs's>PM</span> </div>
                <div className="logo"> <img src={Wave} alt="" /> </div>
                <div className="temp font-medium">12 &deg;C</div>
            </div>
            <div className="chgWeather flex justify-between items-center flex-col gap-6 relative z-30">
                <div className="time font-medium">11<span className='font-normal text-xs's>PM</span> </div>
                <div className="logo"> <img src={cldAndSun} alt="" /> </div>
                <div className="temp font-medium">19 &deg;C</div>
            </div>
          </div>
          {/* weather end  */}

    </div>
  )
}

export default Home