import React from "react";
import "./data";
import { FaLocationDot } from "react-icons/fa6";
const Travel = (props) => {
  return (
    <section className="overflow-hidden">
      <div data-aos="zoom-in-down">
      <div className=" flex  px-[2rem] md:px-[4rem] xl:px-[5rem] ">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div className="  flex ">
            <div className=" ">
              <img className="w-[34rem] h-[35rem] py-10 rounded-full   " src={`${props.img}`} alt="Picture" />
            </div>
          </div>
          <div className="  font-Gupter font-bold xl:py-[6rem] lg:py-[5rem] md:py-[3rem] ">
            <div className="  flex   items-center text-3xl py-2">
              <span>
                <FaLocationDot className="text-red-400" />
              </span>
             <a href={`${props.Address}`} > <span>{`${props.Location}`}</span></a>
            </div>
            <div className=" flex flex-col justify-evenly  py-2  ">
              <h1 className="text-5xl py-2">{props.title}</h1>
              <h1 className="text-2xl">{props.Description}</h1>
              <h1 className=" text-2xl py-2">Date Traveled: {props.DateTravel}</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Travel;
