import "../../css/views/Drills.css";

import { useEffect, useState } from "react";

import { Chessboard } from "react-chessboard";

const ThePawnDrills = () => {
  const [index, set_index] = useState(0);

  useEffect(() => {
    document.title = "The Chessverse | Drills | The Pawn";
  }, []);

  const fens = ["8/8/8/8/8/P7/8/8 w - - 0 1"];
  const highlight = [["a3"]];
  const objectives = ["Get the pawn to a5"];

  const squareStyles = Object.fromEntries(
    highlight[index].map((square) => [
      square,
      { backgroundColor: "rgba(220,20,60,0.6)" },
    ])
  );

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
          options={{
            position: fens[index],
            squareStyles,
            allowDragging: false,
            showAnimations: false,
          }}
        />
      </div>
      <div className="drills-box">
        <h3 className="title">Pawns</h3>
        <p className="text">
          <span>Objective: </span>
          {objectives[index]}
        </p>
        <button className="hint">Hint</button>
        <button
          className="prev btn"
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
