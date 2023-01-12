import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const Promotion = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "8/P7/8/8/8/8/7p/8 w - - 0 1",
    "8/2PPPP2/8/8/8/8/8/8 w - - 0 1",
    "2N5/3PPP2/8/8/8/8/8/8 w - - 0 1",
    "2NB4/4PP2/8/8/8/8/8/8 w - - 0 1",
    "2NBR3/5P2/8/8/8/8/8/8 w - - 0 1",
    "2NBRQ2/8/8/8/8/8/8/8 w - - 0 1",
    "2QQQQ2/8/8/8/8/8/8/8 w - - 0 1",
    "8/P7/1P6/2P5/5p2/6p1/7p/8 w - - 0 1",
    "start",
  ];
  const lessons = [
    "In the lesson about pawns, the question 'What happens when a pawn reaches the edge of the board?' was left unanswered.",
    "When a pawn reaches the edge of the board, it becomes another piece.",
    "It can become a knight, ",
    "A bishop, ",
    "A rook, ",
    "Or a queen.",
    "Most of the time, it is advisable to make a queen, though for certain reasons, you should promote to another piece.",
    "Promotion normally happens nearing the end of the game, as then sometimes only pawns remain on the board,",
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
        <h3 class="title">Promotion</h3>
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

export default React.memo(Promotion);
