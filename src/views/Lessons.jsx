import "../css/views/Lessons.css";

import React from "react";
import wpawn from "../assets/images/pieces/pawn.png";

const Lessons = () => {
  return (
    <>
      <div className="lessons-container">
        <div className="select">
          <ul>
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advanced</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Lessons;
