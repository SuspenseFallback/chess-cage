export function getTotalGamesWon(userData) {
  return (
    userData.bulletgameswon +
    userData.blitzgameswon +
    userData.rapidgameswon +
    userData.classicalgameswon
  );
}

export function getTotalGamesLost(userData) {
  return (
    userData.bulletgameslost +
    userData.blitzgameslost +
    userData.rapidgameslost +
    userData.classicalgameslost
  );
}

export function getTotalGamesDrawn(userData) {
  return (
    userData.bulletgamesdrawn +
    userData.blitzgamesdrawn +
    userData.rapidgamesdrawn +
    userData.classicalgamesdrawn
  );
}

export function getTotalWinPercentage(userData) {
  return (
    getTotalGamesWon(userData) /
    (getTotalGamesLost(userData) + getTotalGamesDrawn(userData))
  );
}

export function getBulletWinPercentage(userData) {
  return (
    userData.bulletgameswon /
    (userData.bulletgameslost + userData.bulletgamesdrawn)
  );
}

export function getBlitzWinPercentage(userData) {
  return (
    userData.blitzgameswon /
    (userData.blitzgameslost + userData.blitzgamesdrawn)
  );
}

export function getRapidWinPercentage(userData) {
  return (
    userData.rapidgameswon /
    (userData.rapidgameslost + userData.rapidgamesdrawn)
  );
}

export function getClassicalWinPercentage(userData) {
  return (
    userData.classicalgameswon /
    (userData.classicalgameslost + userData.classicalgamesdrawn)
  );
}

export function getWinningPercentage(userData, activeButton) {
  if (
    getTotalGamesWon(userData) +
      getTotalGamesLost(userData) +
      getTotalGamesDrawn(userData) ===
    0
  ) {
    return 0;
  }

  if (activeButton === 1) {
    console.log("getting winning percentage ->", activeButton);
    return getTotalWinPercentage(userData);
  } else if (activeButton === 2) {
    return getBulletWinPercentage(userData);
  } else if (activeButton === 3) {
    return getBlitzWinPercentage(userData);
  } else if (activeButton === 4) {
    return getRapidWinPercentage(userData);
  } else if (activeButton === 5) {
    return getClassicalWinPercentage(userData);
  }
}

export function getGamesWon(userData, activeButton) {
  if (activeButton === 1) {
    return getTotalGamesWon(userData);
  } else if (activeButton === 2) {
    return userData.bulletgameswon;
  } else if (activeButton === 3) {
    return userData.blitzgameswon;
  } else if (activeButton === 4) {
    return userData.rapidgameswon;
  } else if (activeButton === 5) {
    return userData.classicalgameswon;
  }
}

export function getGamesDrawn(userData, activeButton) {
  if (activeButton === 1) {
    return getTotalGamesDrawn(userData);
  } else if (activeButton === 2) {
    return userData.bulletgamesdrawn;
  } else if (activeButton === 3) {
    return userData.blitzgamesdrawn;
  } else if (activeButton === 4) {
    return userData.rapidgamesdrawn;
  } else if (activeButton === 5) {
    return userData.classicalgamesdrawn;
  }
}
export function getGamesLost(userData, activeButton) {
  if (activeButton === 1) {
    return getTotalGamesLost(userData);
  } else if (activeButton === 2) {
    return userData.bulletgameslost;
  } else if (activeButton === 3) {
    return userData.blitzgameslost;
  } else if (activeButton === 4) {
    return userData.rapidgameslost;
  } else if (activeButton === 5) {
    return userData.classicalgameslost;
  }
}
