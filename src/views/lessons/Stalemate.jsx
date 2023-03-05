import "../../css/views/Lessons.css";

import Board from "../../components/Board";
import React from "react";

const Stalemate = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "7k/5Q2/8/8/8/8/8/4K3 b - - 0 1",
    "7k/6R1/5K2/8/8/8/8/8 w - - 0 1",
    "6Q1/7p/7k/7p/7K/8/8/8 w - - 0 1",
    "8/2kbK3/8/8/8/8/8/5q2 w - - 0 1",
  ];
  const lessons = [
    "Stalemate is when the opponent has no legal moves, rendering the game a draw.",
    "Stalemate normally happens in the endgame, as there are less pieces, so there are more chances of accidentally stalemating.",
    "Stalemate happens when trying to checkmate in the endgame, as players forget that the opponent has no legal moves.",
    "Stalemate is to be avoided by the winning side, but the losing side, who should be aiming for a draw, should try for stalemate, as it is very easy to miss stalemate for the winning side.",
    "Stalemate is only one of some ways to draw.",
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
        <h3 className="title">Stalemate</h3>
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

export default React.memo(Stalemate);
