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

export function isCastle(move) {
  if (move.includes("-")) {
    return true;
  } else {
    return false;
  }
}

export function getCurrentMove(history) {
  return Math.floor(history.length / 2);
}
