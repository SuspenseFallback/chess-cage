import Lesson from "../Lesson.jsx";
import React from "react";

const ThePawn = () => {
  const fens = [
    "8/8/8/8/4P3/8/8/8 w - - 0 1",
    "8/pppppppp/8/8/8/8/PPPPPPPP/8 w - - 0 1",
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
    "The Pawn do not control the squares they are on or move to. They only control the squares diagonal one square forward from them. \nFor example, these pawns can capture each other.",
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

  const highlights = [[], [], ["e3", "e4"]];

  return (
    <Lesson
      fens={fens}
      lessons={lessons}
      highlights={highlights}
      title="The Pawn"
    />
  );
};

const TheKnight = () => {
  const fens = [
    "8/8/8/8/4N3/8/8/8 w - - 0 1",
    "8/8/8/8/4N3/8/8/8 w - - 0 1",
    "8/8/8/8/4N3/8/8/8 w - - 0 1",
    "8/8/8/4b3/4N3/8/8/8 w - - 0 1",
    "r1bqkb1r/pppp1ppp/2n1pn2/1N6/3PPB2/8/PPP2PPP/R2QKBNR w - - 0 1",
    "start",
  ];
  const lessons = [
    "The knight is the second minor piece, which can be compared to the bishop.",
    "The knight has an odd movement system - It moves in an 'L' shape.",
    "Knights can move to 'L' shapes in 8 directions, though their movements, though they can't move off the board.",
    "Knights have a special ability: They can jump over pieces, so knight attacks can't be blocked.",
    "Knights are very useful for beginners, as their movements are unpredictable and easy to forget in your calculations.",
    "Congratulations! You completed the lesson.",
  ];
  const highlights = [];

  return (
    <Lesson
      fens={fens}
      lessons={lessons}
      highlights={highlights}
      title="The Knight"
    />
  );
};

const TheBishop = () => {
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
  const highlights = [];

  return (
    <Lesson
      fens={fens}
      lessons={lessons}
      highlights={highlights}
      title="The Bishop"
    />
  );
};

const TheRook = () => {
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
  const highlights = [];

  return (
    <Lesson
      fens={fens}
      lessons={lessons}
      highlights={highlights}
      title="The Rook"
    />
  );
};

const TheQueen = () => {
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
  const highlights = [];

  return (
    <Lesson
      fens={fens}
      lessons={lessons}
      highlights={highlights}
      title="The Queen"
    />
  );
};

const TheKing = () => {
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
  const highlights = [];

  return (
    <Lesson
      fens={fens}
      lessons={lessons}
      highlights={highlights}
      title="The King"
    />
  );
};

export { ThePawn, TheKnight, TheBishop, TheRook, TheQueen, TheKing };
