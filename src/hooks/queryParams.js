import React from "react";
import { useLocation } from "react-router-dom";

export default function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function getMode(query) {
  let mode = query.get("time").split("");
  mode[0] = mode[0].toUpperCase();
  return mode.join("");
}

export function getTiming(query) {
  let timing = 0;
  switch (query.get("time")) {
    default:
      timing = 5 * 60;
      break;
    case "bullet":
      timing = 1 * 60;
      break;
    case "blitz":
      timing = 5 * 60;
      break;
    case "rapid":
      timing = 10 * 60;
      break;
    case "classical":
      timing = 30 * 60;
      break;
  }
  return timing;
}

export function getTimeString(query) {
  let timing = "";
  switch (query.get("time")) {
    default:
      timing = "5:00";
      break;
    case "bullet":
      timing = "1:00";
      break;
    case "blitz":
      timing = "5:00";
      break;
    case "rapid":
      timing = "10:00";
      break;
    case "classical":
      timing = "30:00";
      break;
  }
  return timing;
}
