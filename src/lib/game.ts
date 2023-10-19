import confetti from 'canvas-confetti';

export function createConfetti() {
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true
  })({ particleCount: 200, spread: 200 });
}

export function createGame(initialPlayers) {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(initialPlayers);

  const tournament = {
    rounds: [],
    currentRound: -1,
    finalRound: null,

    startGame: function () {
      const nextMatchup = this.getNextMatchup();
      if (!nextMatchup) {
        this.createNextRound();
        return this.getNextMatchup();
      }
      return nextMatchup;
    },

    setWinner: function (selectedPlayer) {
      const matchup = this.getNextMatchup();
      if (
        matchup &&
        matchup.players.find(
          (player) => player.family === selectedPlayer.family
        )
      ) {
        matchup.winner = selectedPlayer;

        const nextMatchup = this.startGame();
        if (nextMatchup) {
          return nextMatchup;
        }

        this.finalRound = this.currentRound;
        return {
          winner: matchup.players.find(
            (player) => player.family === selectedPlayer.family
          )
        };
      } else {
        console.error('Invalid winner or no available matchup.');
      }
    },

    createNextRound: function () {
      this.currentRound++;
      const winners =
        this.rounds.length > 0
          ? this.rounds[this.currentRound - 1]
              .filter((matchup) => matchup.winner)
              .map((matchup) => matchup.winner)
          : initialPlayers;

      for (let i = 0; i < winners.length; i += 2) {
        this.rounds[this.currentRound] = this.rounds[this.currentRound] || [];
        const players = winners.slice(i, i + 2);
        if (players.length === 1) {
          this.rounds[this.currentRound].push({
            players: winners.slice(i, i + 2),
            winner: players[0]
          });
        } else {
          this.rounds[this.currentRound].push({
            players: winners.slice(i, i + 2),
            winner: null
          });
        }
      }
    },

    getNextMatchup: function () {
      const currentRoundMatches = this.rounds[this.currentRound];
      return (
        currentRoundMatches &&
        currentRoundMatches.find((match) => !match.winner)
      );
    }
  };

  return tournament;
}
