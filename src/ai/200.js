class AI_LEVEL_ONE {
  constructor(game) {
    this.game = game;
  }

  makeMove = () => {
    let bestMove = null;

    const moves = this.game.moves();

    const randomIdx = Math.floor(Math.random() * moves.length);
    bestMove = moves[randomIdx];

    return bestMove;
  };
}

export default AI_LEVEL_ONE;
