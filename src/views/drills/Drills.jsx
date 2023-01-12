import "../../css/views/Drills.css";

import React, { useEffect } from "react";

import { Chessboard } from "react-chessboard";
import rough from "../../../node_modules/roughjs/bundled/rough.cjs";

const ThePawnDrills = () => {
  const [index, set_index] = React.useState(0);

  useEffect(() => {
    document.title = "The Chessverse | Drills | The Pawn";
  }, []);

  let square = 0;
  const fens = ["8/8/8/8/8/P7/8/8 w - - 0 1"];
  const highlight = [["24"]];
  const objectives = ["Get the pawn to a5"];

  const roughSquare = ({ squareElement, squareWidth }) => {
    if (highlight[index].includes(square.toString())) {
      let rc = rough.svg(squareElement);
      const chessSquare = rc.rectangle(0, 1, squareWidth, squareWidth, {
        roughness: 0,
        fill: "rgba(220,20,60,0.6)",
        fillStyle: "solid",
      });
      squareElement.appendChild(chessSquare);
    }
    square += 1;
  };

  const calc_width = ({ screenWidth, screenHeight }) => {
    const width = screenWidth * 0.485;
    return width;
  };

  const next_drill = () => {
    set_index(index + 1);
  };

  const previous_drill = () => {
    set_index(index - 1);
  };

  return (
    <>
      <div className="board">
        <Chessboard
          calcWidth={calc_width}
          position={fens[index]}
          roughSquare={roughSquare}
          selectedSquares={highlight[index]}
        />
      </div>
      <div class="drills-box">
        <h3 className="title">Pawns</h3>
        <p className="text">
          <span>Objective: </span>
          {objectives[index]}
        </p>
        <button class="hint">Hint</button>
        <button
          class="prev btn"
          onClick={previous_drill}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          className="next btn"
          onClick={next_drill}
          disabled={index === objectives.length - 1}
        >
          Next
        </button>
        <p className="progress">
          {index + 1}/{objectives.length}
        </p>
      </div>
    </>
  );
};

export default ThePawnDrills;
