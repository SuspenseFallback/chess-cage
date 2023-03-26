export function isCapture(move) {
  if (move.captured) {
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
