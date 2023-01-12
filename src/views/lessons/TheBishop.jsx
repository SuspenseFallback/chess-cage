import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const TheBishop = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "8/8/8/8/4B3/8/8/8 w - - 0 1",
    "2b2b2/8/8/8/8/8/8/2B2B2 w - - 0 1",
    "8/8/6p1/8/4B3/8/8/8 w - - 0 1",
    "8/8/8/8/3BB3/8/8/8 w - - 0 1",
    "8/8/3b4/4p3/2B1P1b1/4B3/8/8 w - - 0 1",
    "start",
  ];
  const lessons = [
    "The bishop is a long-range, minor piece (it is small compared to the rest of the pieces.",
    "There are two bishops for each color on the board - One on light squares and one on dark squares for each side.",
    "Bishops can move diagonally in all directions forever, except when blocked by a piece or pawn.",
    "Bishops are best put in the center of the board, as they control the most squares there.",
    "The Bishop normally control the center, so bishops are normally put near the center.",
    "Congratulations! You finished the lesson.",
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
      <div class="lesson-box">
        <h3 class="title">The Bishop</h3>
        <p class="text">{lessons[index]}</p>
        <button class="practice">Go to exercises</button>
        <button class="prev btn" onClick={previousPage} disabled={index === 0}>
          Previous
        </button>
        <button
          class="next btn"
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

export default React.memo(TheBishop);
