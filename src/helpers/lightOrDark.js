import { throw_err } from "./throw_err";

export const squares = [
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "g1",
  "g2",
  "g3",
  "g4",
  "g5",
  "g6",
  "g7",
  "g8",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h7",
  "h8",
];

export const lightOrDark = (square) => {
  switch (square) {
    case 1:
      return "light";
    case 2:
      return "dark";
    case 3:
      return "light";
    case 4:
      return "dark";
    case 5:
      return "light";
    case 6:
      return "dark";
    case 7:
      return "light";
    case 8:
      return "dark";
    case 9:
      return "dark";
    case 10:
      return "light";
    case 11:
      return "dark";
    case 12:
      return "light";
    case 13:
      return "dark";
    case 14:
      return "light";
    case 15:
      return "dark";
    case 16:
      return "light";
    case 17:
      return "light";
    case 18:
      return "dark";
    case 19:
      return "light";
    case 20:
      return "dark";
    case 21:
      return "light";
    case 22:
      return "dark";
    case 23:
      return "light";
    case 24:
      return "dark";
    case 25:
      return "dark";
    case 26:
      return "light";
    case 27:
      return "dark";
    case 28:
      return "light";
    case 29:
      return "dark";
    case 30:
      return "light";
    case 31:
      return "dark";
    case 32:
      return "light";
    case 33:
      return "light";
    case 34:
      return "dark";
    case 35:
      return "light";
    case 36:
      return "dark";
    case 37:
      return "light";
    case 38:
      return "dark";
    case 39:
      return "light";
    case 40:
      return "dark";
    case 41:
      return "dark";
    case 42:
      return "light";
    case 43:
      return "dark";
    case 44:
      return "light";
    case 45:
      return "dark";
    case 46:
      return "light";
    case 47:
      return "dark";
    case 48:
      return "light";
    case 49:
      return "light";
    case 50:
      return "dark";
    case 51:
      return "light";
    case 52:
      return "dark";
    case 53:
      return "light";
    case 54:
      return "dark";
    case 55:
      return "light";
    case 56:
      return "dark";
    case 57:
      return "dark";
    case 58:
      return "light";
    case 59:
      return "dark";
    case 60:
      return "light";
    case 61:
      return "dark";
    case 62:
      return "light";
    case 63:
      return "dark";
    case 64:
      return "light";
    default:
      return throw_err(400, "Invalid value");
  }
};
