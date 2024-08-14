import React, { useState, useEffect } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const intervalID = setInterval(()=>{setTime(new Date())}, 100);
      return()=>{
          clearInterval(intervalID);
      }
    }, []);
    const formatTime = () => {
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridiem=hours>=12?'PM':'AM';
        hours=hours%12 || 12;
        return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }
    const padZero=(number)=>{
        return number<10?'0'+number:number
    }
  return (
    <div>
      <div>
        <h1>Digital Clock</h1>
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}
export default DigitalClock;
