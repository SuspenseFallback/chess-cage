import React, {useState, useEffect, useRef} from 'react';

function useInterval(pause, callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      let interval = setInterval(() => {
        savedCallback.current();
      }, delay);
      if(pause) {
        clearInterval(interval)
        return;
        }
      return () => clearInterval(interval);
    }, [delay]);
  }

const Timer = ({initTime, onTimeout, isRunning}) => {
    const [time, setTime] = useState(initTime);

    useInterval(isRunning, () => {
        if(time < 1) {
            onTimeout();
            return;
        } else if(isRunning) {
            setTime(time - 1);
            console.log(time)
        }
    }, 1000);

    return time;
}
 
export default Timer;