import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const TheQueen = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "8/8/8/8/3Q4/8/8/8 w - - 0 1",
    "8/8/8/8/3Q4/8/8/8 w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/2N2N2/PPP2PPP/R2Q1RK1 w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/8/4PQ2/PPPP1PPP/RNB1KBNR w - - 0 1",
    "7r/2bbpnn1/2r2p2/2ppQp2/3pp3/8/8/8 w - - 0 1",
    "8/8/8/Q6r/6b1/8/8/8 w - - 0 1",
    "start",
  ];
  const lessons = [
    "The queen is the most powerful piece in chess and a major piece.",
    "The queen has the combined movement of the bishop and the rook, meaning that it can move infinitely horizontally, vertically and diagonally in all 4 directions.",
    "The queen is one of the last pieces to be moved (after the bishops and knights normally.)",
    "Queens are very powerful due to their ability to move to many squares, making them the first piece to move for many beginners.",
    "That is a bad idea as your queen can get trapped.",
    "Queens, though powerful, are equal to (or sometimes even worse than) a rook and bishop.",
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
        <h3 class="title">The Queen</h3>
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

export default React.memo(TheQueen);
