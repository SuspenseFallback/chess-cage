import "../css/views/Lessons.css";

import React from "react";
import wpawn from "../assets/images/pieces/pawn.png";

const Lessons = () => {
  return (
    <>
      <div className="lessons-container">
        <div className="beginner">
          <p className="header">Beginner</p>
          <p className="item-title">The pieces</p>
          <ul>
            <li className="item">
              <img src={wpawn} alt="Pawn" className="img" width="50" />
              <p className="item-header">The Pawn</p>
            </li>
          </ul>
        </div>
        <div className="intermediate">
          <p className="header">Intermediate</p>
        </div>
        <div className="advanced">
          <p className="header">Advanced</p>
        </div>
      </div>
    </>
  );
};

export default Lessons;
