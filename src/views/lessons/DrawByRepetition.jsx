import "../../css/views/Lessons.css";

import Board from "../../components/Board";
import React from "react";

const DrawByRepetition = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "5rk1/pppn4/nbqp2Q1/1bpp4/2r5/2P5/PP3PPP/R4RK1 w - - 0 1",
    "4k3/4P3/4K3/8/8/8/8/8 w - - 0 1",
    "rnbkqbnr/ppp2ppp/8/8/8/3Q4/PPP2PPP/RNBK1BNR w - - 0 1",
    "rnb1k1nr/ppp2p1p/6p1/q7/1b6/1P3NP1/PBPPPPBP/RN1QK2R w - - 0 1",
    "start",
  ];
  const lessons = [
    "Draw by repetition is when the same position is achieved three times (doesnt have to be in a row).",
    "Draw by repetition normally occurs when the position is impossible to win, or when one side is winning but misses the repition.",
    "Repetition also happens in grandmaster games, as when equals play, the game is likely to be a draw.",
    "Draw by repetition is less likely at lower levels, as more punishable mistakes occur.",
    "Congratulations! You completed the lesson.",
  ];

  const nextPage = () => {
    set_index(index + 1);
  };

  const previousPage = () => {
    set_index(index - 1);
  };

  return (
    <>
      <Board color="w" position={fens[index]} isInteractive={false} />
      <div className="lesson-box">
        <h3 className="title">Draw By Repetition</h3>
        <p className="text">{lessons[index]}</p>
        <button className="practice">Go to exercises</button>
        <button
          className="prev btn"
          onClick={previousPage}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          className="next btn"
          onClick={nextPage}
          disabled={index === lessons.length - 1}
        >
          Next
        </button>
        <p className="progress">
          {index + 1}/{lessons.length}
        </p>
      </div>
    </>
  );
};

export default React.memo(DrawByRepetition);
