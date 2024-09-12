import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/prym_logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.png";
import AddDrone from "../component/AddDrone";
import axios from "axios";
const AllDrones = () => {
  const [close, setClose] = useState(false);

  const [droneAllData, setDroneAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  console.log(droneAllData);
  useEffect(() => {
    setLoading(true);
    const fetchDroneInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/getAllDrones`); // Adjust URL and ID as needed
        setDroneAllData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching All drones drone profile:", error);
      }
    };

    fetchDroneInfo();
  }, []);

  return (
    <div className="AllDronewrapper bgDesign h-[100vh] w-[100vw] overflow-hidden relative ">
      {/* // Add drone modal  HIDE & SHOW */}
      {close && (
        <div
          className={`addNow absolute z-50 h-screen w-screen bg-[#0000006b] backdrop-blur-sm `}
        >
          <AddDrone setClose={setClose} close={close} />
        </div>
      )}
      {/* Add drone modal End  */}
      <img
        src={bg1}
        className="design absolute brightness-30 bottom-[2rem] left-[-9rem]  opacity-20 w-[30rem]"
      />
      <img
        src={bg2}
        className="design absolute bottom-[2rem] -right-9  opacity-50 w-[30rem]"
      />
      <img
        src={bg3}
        className="design absolute -top-[1rem] -rotate-45 left-[18rem] brightness-50  opacity-50 w-[30rem]"
      />
      {/* navbar start  */}
      <div className="navbar flex items-start justify-between relative z-20 ">
        {/* //left div  */}
        <div className="logo bg-[#0000005e p-1 px-4">
          <img src={Logo} alt="" className="w-[150px] " />
        </div>

        {/* middle div  */}
        <div className="title bg-[#0000005e] text-4xl text-center text-white mt-2 font-bold px-4 py-1 relative backdrop-blur-sm">
          {/* right line  */}
          <div className="rightline absolute -top-[1px] bg-transparent -right-[1px] h-[14px] w-4 border-t border-r border-blue-400"></div>
          <div className="rightline absolute  -bottom-[1px] bg-transparent -left-[1px] h-[14px] w-4 border-l border-b border-yellow-400"></div>
          S.<span className="text-blue-500">H</span>.A.K.
          <span className="text-yellow-500">T</span>.I
        </div>

        {/* right div  */}
        <div className="links flex justify-center items-center gap-1 mt-2">
          <Link to="/">
            <div className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black]  ease-linear duration-200  hover:bg-red-300 hover:rounded-md mx-2">
              Log<span className="text-[crimsn]">out</span>{" "}
            </div>
          </Link>
        </div>
      </div>
      {/* navbar end  */}

      {/* All drones start  */}
      <div className="allDrone h-[80%] backdrop-blur-lg w-[95%] mx-auto relative z-30 rounded-xl ">
        {/* min nav start  */}
        <div className="minNav flex justify-between items-center pt-2">
          {/* left heading  */}
          <div className="left flex justify-center items-center">
          <Link to={"/home"}>  <div className="back p-2 bg-blue-300 border-t-[1px] border-b-[1px] border-r-[1px] rounded-ee-lg rounded-se-lg text-white">
              <IoIosArrowBack fontSize={"1.2rem"} />
            </div></Link>
            <h className="heading ml-4 font-bold text-lg text-white">
              All Drones
            </h>
          </div>

          {/* right search and filters */}
          <div className="right flex justify-center items-center  gap-2 ">
            <div>
              <button
                onClick={() => {
                  setClose(true);
                }}
                className="addDrone p-1 rounded-md px-4 font-medium shadow-lg text-white border border-blue-300  hover:opacity-80 duration-200 transition-all"
              >
                Add
              </button>
            </div>
            {/* search input  */}
            <div className="search flex justify-center items-center border border-blue-300 rounded-lg shadow-md">
              <div className="icon p-2  opacity-80">
                <FaSearch fontSize={"1.2rem"} color="white" />
              </div>
              <input
                type="text"
                className="p-1 outline-none text-sm bg-transparent text-white"
                placeholder="search"
              />
            </div>

            {/* filtering  */}
            <div className="filters mx-2">
              <select
                name=""
                id=""
                className=" p-1 rounded-md  bg-blue-300 text-black border  drop-shadow-md outline-none"
              >
                <option value="new " className="">
                  {" "}
                  <span className="text-white">All Droness</span>{" "}
                </option>
                <option value="new ">Flying Drones</option>
                <option value="new ">Active Drones</option>
                <option value="new ">Inactive Drones</option>
                <option value="new ">Repair Drones</option>
              </select>
            </div>
          </div>
        </div>

        {/* // Drones_tables */}
        <div class="dronesTable mt-12 mx-1 relative overflow-x-auto shadow-md sm:rounded-ss-lg sm:rounded-se-lg bg-transparent h-[85%]">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-l border-r">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  UIN-Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Pilot Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {droneAllData.map((item, index) => (
                <tr
                  class=" border-b dark:border-gray-300 my-2"
                  key={index}
                  onClick={() => navigate(`/profile/:${item._id}`)}
                >
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium text-white dark:text-white"
                  >
                    {item.droneDetail.droneSerialNumber}
                  </th>
                  <td class="px-6 py-2 text-white">
                    {item.pilotDetail.pilotName}
                  </td>
                  <td class="px-6 py-2 text-white">
                    {" "}
                    {item.purchaseDetail.location}{" "}
                  </td>
                  <td class="px-6 py-2 text-white">
                    {" "}
                    {item.purchaseDetail.owner}{" "}
                  </td>
                  <td class="px-6 py-2 text-white">
                    {" "}
                    {item.purchaseDetail.phone}{" "}
                  </td>
                  <td class="px-6 py-2 ">
                    {item.Dstatus == "Active" && (
                      <div className="Status p-1 rounded-md opacity-75 bg-green-300 border-2 text-center font-semibold border-green-500 text-green-600">
                        {item.Dstatus}
                      </div>
                    )}

                    {item.Dstatus == "Inactive" && (
                      <div className="Status p-1 rounded-md opacity-75 bg-red-300 border-2 text-center font-semibold border-red-500 text-red-600">
                        {item.Dstatus}
                      </div>
                    )}

                    {item.Dstatus == "Reapair" && (
                      <div className="Status p-1 rounded-md opacity-75 bg-yellow-300 border-2 text-center font-semibold border-yellow-500 text-yellow-600">
                        {item.Dstatus}
                      </div>
                    )}

                    {item.Dstatus == "Flying" && (
                      <div className="Status p-1 rounded-md opacity-75 bg-blue-300 border-2 text-center font-semibold border-blue-500 text-blue-600">
                        {item.Dstatus}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* All drones end  */}
    </div>
  );
};

export default AllDrones;
