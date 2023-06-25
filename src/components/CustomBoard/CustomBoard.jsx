import React from "react";
import Square from "./Square.jsx";
import "./CustomBoard.css";

const CustomBoard = () => {
  return (
    <div className="page">
      <div className="custom-board">
        <div className="row">
          <Square row="8" column="a" />
          <Square row="8" column="b" />
          <Square row="8" column="c" />
          <Square row="8" column="d" />
          <Square row="8" column="e" />
          <Square row="8" column="f" />
          <Square row="8" column="g" />
          <Square row="8" column="h" />
        </div>
        <div className="row">
          <Square row="7" column="a" />
          <Square row="7" column="b" />
          <Square row="7" column="c" />
          <Square row="7" column="d" />
          <Square row="7" column="e" />
          <Square row="7" column="f" />
          <Square row="7" column="g" />
          <Square row="7" column="h" />
        </div>
        <div className="row">
          <Square row="6" column="a" />
          <Square row="6" column="b" />
          <Square row="6" column="c" />
          <Square row="6" column="d" />
          <Square row="6" column="e" />
          <Square row="6" column="f" />
          <Square row="6" column="g" />
          <Square row="6" column="h" />
        </div>
        <div className="row">
          <Square row="5" column="a" />
          <Square row="5" column="b" />
          <Square row="5" column="c" />
          <Square row="5" column="d" />
          <Square row="5" column="e" />
          <Square row="5" column="f" />
          <Square row="5" column="g" />
          <Square row="5" column="h" />
        </div>
        <div className="row">
          <Square row="4" column="a" />
          <Square row="4" column="b" />
          <Square row="4" column="c" />
          <Square row="4" column="d" />
          <Square row="4" column="e" />
          <Square row="4" column="f" />
          <Square row="4" column="g" />
          <Square row="4" column="h" />
        </div>
        <div className="row">
          <Square row="3" column="a" />
          <Square row="3" column="b" />
          <Square row="3" column="c" />
          <Square row="3" column="d" />
          <Square row="3" column="e" />
          <Square row="3" column="f" />
          <Square row="3" column="g" />
          <Square row="3" column="h" />
        </div>
        <div className="row">
          <Square row="2" column="a" />
          <Square row="2" column="b" />
          <Square row="2" column="c" />
          <Square row="2" column="d" />
          <Square row="2" column="e" />
          <Square row="2" column="f" />
          <Square row="2" column="g" />
          <Square row="2" column="h" />
        </div>
        <div className="row">
          <Square row="1" column="a" />
          <Square row="1" column="b" />
          <Square row="1" column="c" />
          <Square row="1" column="d" />
          <Square row="1" column="e" />
          <Square row="1" column="f" />
          <Square row="1" column="g" />
          <Square row="1" column="h" />
        </div>
      </div>
    </div>
  );
};

export default CustomBoard;
