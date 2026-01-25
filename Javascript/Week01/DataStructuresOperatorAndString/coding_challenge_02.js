const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// 1
for (let i = 0; i < game.scored.length; i++) {
  console.log("Goal " + (i + 1) + ": " + game.scored[i]);
}

// 2
let sum = 0;
const odds = Object.values(game.odds);

for (let i = 0; i < odds.length; i++) {
  sum = sum + odds[i];
}

console.log(sum / odds.length);

// 3
for (const odd in game.odds) {
  if (odd === "draw") {
    console.log("Odd of draw: " + game.odds[odd]);
  } else {
    console.log("Odd of victory " + game[odd] + ": " + game.odds[odd]);
  }
}

// 4
const scorers = {};

for (let i = 0; i < game.scored.length; i++) {
  const player = game.scored[i];

  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}

console.log(scorers);
