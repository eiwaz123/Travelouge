import React, { useState, useRef, useEffect } from "react";

const StopWatch = () => {
  const [running, setRunning] = useState(false);
  //zero milisecond
  const [elapsedTime, setElapsedTime] = useState(0);
  // kung mag iistart mag time dapat zero ang interval
  const intervalRef = useRef(null);
  //zero milisecond
  const startTimeRef = useRef(0);
  useEffect(() => {
    if (running) {
        intervalRef.current= setInterval(()=>{
            setElapsedTime(Date.now()-startTimeRef.current)
        },10)
    }
    return () => {
        clearInterval(intervalRef.current);
    }
  }, [running]);
  const handleStart = () => {
        setRunning(true);
        startTimeRef.current = Date.now()-elapsedTime;
  };
  const handleStop = () => {
    setRunning(false);
  };
  const handleReset = () => {
    setElapsedTime(0);
    setRunning(false);
  };
  const formatTime = () => {
    let hours=Math.floor(elapsedTime/(1000*60*60))
    let minutes=Math.floor(elapsedTime/(1000*60)%60)
    let seconds=Math.floor(elapsedTime/(1000)%60)
    let millisecond=Math.floor((elapsedTime%1000)/10)
    return`${hours} : ${minutes} : ${seconds} : ${millisecond}`;
  };
  return (
    <div className="stopwatch">
      <div className="stopwatch-time">{formatTime()}</div>
      <div className="Control ">
        <button onClick={handleStart} className="start-btn">
          Start
        </button>
        <button onClick={handleStop} className="stop-btn">
          Stop
        </button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};
export default StopWatch;
