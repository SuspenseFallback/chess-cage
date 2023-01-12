import { throw_err } from "./throw_err";

export const squareToNum = (square) => {
  switch (square.charAt(0)) {
    case "a":
      return 1 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    case "b":
      return 2 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    case "c":
      return 3 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    case "d":
      return 4 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    case "e":
      return 5 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    case "f":
      return 6 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    case "g":
      return 7 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    case "h":
      return 8 + 8 * (8 - parseInt(square.charAt(1)) + 1) - 8;
    default:
      return throw_err(400, "Invalid value");
  }
};
