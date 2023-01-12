import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const TheKing = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "8/8/8/8/8/8/8/4K3 w - - 0 1",
    "6r1/8/8/8/8/8/5PqP/6K1 w - - 0 1",
    "8/8/8/8/4K3/8/8/8 w - - 0 1",
    "rrb3k1/pppp1p1p/qn3BpQ/bn4N1/8/8/PPP2PPP/5RK1 w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/2N2N2/PPPQ1PPP/R3K2R w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/2N2N2/PPPQ1PPP/R3K2R w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/2N2N2/PPPQ1PPP/R4RK1 w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/2N2N2/PPPQ1PPP/2KR3R w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/2N2N2/PPPQ1PPP/R3K2R w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/P1N2N1P/RPPQKPPR/8 w - - 0 1",
    "rnbqkbnr/pppppppp/8/8/2BPPB2/8/PPPQ1PPP/RN2K1NR w - - 0 1",
    "r2qk2r/pppp1ppp/2n2n2/1b2p3/1b1PP3/1B3N2/PPP2PPP/RNBQK2R w KQkq - 0 1",
    "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w Qq - 0 1",
    "start",
  ];
  const lessons = [
    "The king is one of the weakest, but the most important piece.",
    "The goal of chess is to trap the king, which in chess terms, is called 'checkmate'.",
    "Kings can only move one square in each direction.",
    "Kings are never used for attacking, and are best kept safe, in the wings/flanks of the board (the sides).",
    "Kings have a special movement combined with rooks, called 'castling'.",
    "Castling is when the king is moved two squares to the left or right and the rook in that corner is moved to the center.",
    "There are two types of castling - Kingside.",
    "And queenside.",
    "Castling can only occur under the following conditions:",
    "The king and the rook to be castled have not moved yet,",
    "There are no pieces in the way of castling,",
    "And the king or the squares it has to go through to castle are not under attack.",
    "Castling is done to keep the king safe, one of the most important things in chess.",
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
        <h3 class="title">The King</h3>
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

export default React.memo(TheKing);
