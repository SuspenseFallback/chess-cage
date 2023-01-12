import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const ThePawn = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "8/8/8/8/4P3/8/8/8 w - - 0 1",
    "8/4p3/8/8/8/8/4P3/8 w - - 0 1",
    "8/4p3/8/8/8/8/4P3/8 w - - 0 1",
    "8/8/8/4p3/3P4/8/8/8 w - - 0 1",
    "8/8/8/2p5/3P4/8/8/8 w - - 0 1",
    "8/8/8/3p4/3P4/8/8/8 w - - 0 1",
    "8/2p5/8/3P4/8/8/8/8 w - - 0 1",
    "8/8/8/2pP4/8/8/8/8 w - - 0 1",
    "8/8/2P5/8/8/8/8/8 w - - 0 1",
    "8/8/8/3pP3/8/8/8/8 w - - 0 1",
    "8/8/8/4pP2/8/8/8/8 w - - 0 1",
    "8/8/8/8/2Pp4/8/8/8 w - - 0 1",
    "8/8/2P5/8/8/8/8/8 w - - 0 1",
    "8/2p4p/8/3P4/8/8/7P/8 w - - 0 1",
    "8/2p4p/8/3P4/8/8/7P/8 w - - 0 1",
    "8/7p/8/2pP4/8/8/7P/8 w - - 0 1",
    "8/7p/8/2pP4/8/7P/8/8 w - - 0 1",
    "8/8/7p/2pP4/8/7P/8/8 w - - 0 1",
    "8/8/7p/2pP4/8/7P/8/8 w - - 0 1",
    "8/P7/8/8/8/8/7p/8 w - - 0 1",
    "start",
  ];
  const lessons = [
    "The pawn is the weakest piece in chess. It can only move one square forward, as shown on the board.",
    "The pawns' home square are on the second row of the board, or the seventh row.",
    "The Pawn, when on the home row, can move two squares forward. This is one of their special movements.",
    "The Pawn do not control the squares they are on or move to. They only control the squares diagonal one square forward from them. <br/> For example, these pawns can capture each other.",
    "These pawns can also capture each other.",
    "The Pawn cannot move through other pawns or pieces.",
    "Now, these two pawns are on the board and it is Black to move.",
    "The pawn advances two squares, as if it moved one square forward, it would have been captured.",
    "But the pawn was still captured. This rule is called en passant (french for 'in passing').",
    "En passant is also possible here.",
    "And here.",
    "And here for black.",
    "En passant is possible for any pawn that is next to a pawn that just moved two squares forward.",
    "If a move other than en passant has been played, en passant is not possible.",
    "For example, we come to the same position, but with two extra pawns.",
    "Black moves his pawn two squares.",
    "But now, white pushes another pawn.",
    "Black does too.",
    "Now, en passant is not possible, as the first chance to do it is gone.",
    "What happens when a pawn moves to the end of the board? It's called 'promotion', a topic which will be taught in another lesson.",
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
        <h3 class="title">The Pawn</h3>
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

export default React.memo(ThePawn);
