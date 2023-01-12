export const convertTimeToString = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const convertSecondsToMinutesAndSeconds = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const new_seconds = seconds % 60;
  return [minutes, new_seconds];
};
