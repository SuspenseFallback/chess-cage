export function isCapture(move) {
  if (move.includes("x")) {
    return true;
  } else {
    return false;
  }
}

export function isCheckmate(move) {
  if (move.includes("#")) {
    return true;
  } else {
    return false;
  }
}
