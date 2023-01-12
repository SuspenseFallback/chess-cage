import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const TheRook = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "3rr3/8/8/8/8/8/8/3RR3 w - - 0 1",
    "8/4P3/8/8/4R3/8/8/8 w - - 0 1",
    "r6r/8/8/8/8/8/8/R6R w - - 0 1",
    "r3r1k1/ppp2ppp/8/8/8/8/PPP2PPP/R2R2K1 w - - 0 1",
    "3rr1k1/ppp2ppp/8/8/8/8/PPP2PPP/3RR1K1 w - - 0 1",
    "start",
  ];
  const lessons = [
    "Rooks are long-range, major pieces (they are powerful).",
    "Rooks can move horizontally and vertically forever, except when blocked by another piece.",
    "Rooks are moved last, before all the other pieces come out, because they start the game in the corners of the board.",
    "Because of this, rooks normally remain on the board while all the other pieces are captured.",
    "Rooks love open files (columns with no pawns on them), as they can control the entire file.",
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
      <div class="lesson-box">
        <h3 class="title">The Rook</h3>
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

export default React.memo(TheRook);
