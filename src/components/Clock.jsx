import React, { useEffect, useRef, useState } from "react";

import { convertTimeToString } from "../helpers/convertTimeToString";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const Clock = ({ color, start, game, time, set_time, onTimeout }) => {
  const [clock_over, set_clock_over] = useState(false);

  useInterval(() => {
    if (time <= 1 && !clock_over) {
      set_clock_over(true);
      onTimeout();
    }
    if (start && game.turn() === color && time > 1) {
      set_time(time - 1);
    }
  }, 1000);

  return (
    <div className="clock-wrapper">
      <p className={"clock " + (color === "w" ? "white" : "black")}>
        {convertTimeToString(time)}
      </p>
    </div>
  );
};

export default Clock;
