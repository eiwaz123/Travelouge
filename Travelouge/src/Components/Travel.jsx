import React from "react";
import "./data";
import { FaLocationDot } from "react-icons/fa6";
const Travel = (props) => {
  return (
    <div className=" ">
      <div className="  grid grid-cols-2 px-[15.5rem] ">
        <div className=" flex justify-center items-center ">
          <div className="flex justify-center items-center p-10">
            <img className="w-96 h-30 rounded-md" src={`${props.img}`} alt="Picture" />
          </div>
        </div>
        <div className="  font-Gupter px-[5rem] py-[2rem] ">
          <div className="flex justify-center items-center text-3xl py-2">
            <span>
              <FaLocationDot className="text-red-400" />
            </span>
            <span>{`${props.Location}`}</span>
          </div>
          <div className=" flex justify-center items-center py-2  text-4xl">
            <h1>{props.title}</h1>
          </div>
          <div className="flex justify-center items-center py-2 ">
            <h1>{props.Description}</h1>
          </div>
          <div>
            <h1>Date Traveled: {props.DateTravel}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Travel;
