const pack = [
  { name: "2 pik", power: 2 },
  { name: "2 trefl", power: 2 },
  { name: "2 karo", power: 2 },
  { name: "2 kier", power: 2 },

  { name: "3 pik", power: 3 },
  { name: "3 trefl", power: 3 },
  { name: "3 karo", power: 3 },
  { name: "3 kier", power: 3 },

  { name: "4 pik", power: 4 },
  { name: "4 trefl", power: 4 },
  { name: "4 karo", power: 4 },
  { name: "4 kier", power: 4 },

  { name: "5 pik", power: 5 },
  { name: "5 trefl", power: 5 },
  { name: "5 karo", power: 5 },
  { name: "5 kier", power: 5 },

  { name: "6 pik", power: 6 },
  { name: "6 trefl", power: 6 },
  { name: "6 karo", power: 6 },
  { name: "6 kier", power: 6 },

  { name: "7 pik", power: 7 },
  { name: "7 trefl", power: 7 },
  { name: "7 karo", power: 7 },
  { name: "7 kier", power: 7 },

  { name: "8 pik", power: 8 },
  { name: "8 trefl", power: 8 },
  { name: "8 karo", power: 8 },
  { name: "8 kier", power: 8 },

  { name: "9 pik", power: 9 },
  { name: "9 trefl", power: 9 },
  { name: "9 karo", power: 9 },
  { name: "9 kier", power: 9 },

  { name: "10 pik", power: 10 },
  { name: "10 trefl", power: 10 },
  { name: "10 karo", power: 10 },
  { name: "10 kier", power: 10 },

  { name: "Jopek pik", power: 11 },
  { name: "Jopek trefl", power: 11 },
  { name: "Jopek karo", power: 11 },
  { name: "Jopek kier", power: 11 },

  { name: "Dama pik", power: 12 },
  { name: "Dama trefl", power: 12 },
  { name: "Dama karo", power: 12 },
  { name: "Dama kier", power: 12 },

  { name: "Król pik", power: 13 },
  { name: "Król trefl", power: 13 },
  { name: "Król karo", power: 13 },
  { name: "Król kier", power: 13 },

  { name: "As pik", power: 14 },
  { name: "As trefl", power: 14 },
  { name: "As karo", power: 14 },
  { name: "As kier", power: 14 },

  { name: "Joker 1", power: 15 },
  { name: "Joker 2", power: 15 },
];

const welcomeWindow = document.querySelector(".welcomeContainer__popup");
const startButton = document.querySelector(".welcomeContainer__button");
const container = document.querySelector(".container");

startButton.addEventListener("click", () => {
  welcomeWindow.style.display = "none";
  container.style.display = "grid";
});

let player1 = [];
let player2 = [];
const boardPlayer1FirstCard = document.querySelector(
  ".boardPlayer1__firstCard"
);
const boardPlayer2FirstCard = document.querySelector(
  ".boardPlayer2__firstCard"
);
let boardPlayer1SecondCard = document.querySelector(".boardPlayer1__firstCard");
let boardPlayer2SecondCard = document.querySelector(".boardPlayer2__firstCard");
let message = document.querySelector(".message");
let numberOfCardsPlayer1 = document.querySelector(".numberOfCardsPlayer1");
let numberOfCardsPlayer2 = document.querySelector(".numberOfCardsPlayer2");
const nextMoveButton = document.querySelector(".button");
const numberOfCards = pack.length / 2;
let currentCardIndex = 0;

let renderNumberOfCards = () => {
  numberOfCardsPlayer1.innerHTML = player1.length;
  numberOfCardsPlayer2.innerHTML = player2.length;
};

let cardsDistribution = () => {
  for (i = 0; i < numberOfCards; i++) {
    //losowe id z talii
    let randomKardIDplayer1 = Math.floor(Math.random() * pack.length);
    player1.push(pack[randomKardIDplayer1]);
    pack.splice(randomKardIDplayer1, 1);
  }

  for (z = 0; z < numberOfCards; z++) {
    //losowe id z talii
    let randomKardIDplayer2 = Math.floor(Math.random() * pack.length);
    player2.push(pack[randomKardIDplayer2]);
    pack.splice(randomKardIDplayer2, 1);
  }
};

let whoWins = () => {
  if (player1[currentCardIndex].power > player2[currentCardIndex].power) {
    message.innerHTML = "Player 1 wins the battle!";
    for (let d = 0; d < currentCardIndex + 1; d++) {
      player1.push(player1[0]);
      player1.push(player2[0]);
      player1.splice(0, 1);
      player2.splice(0, 1);
    }
    if (player2.length === 0) {
      alert("Player 1 wins the war!");
      confirm("Do you want to play again?");
    }
    currentCardIndex = 0;
  } else if (
    player1[currentCardIndex].power < player2[currentCardIndex].power
  ) {
    message.innerHTML = "Player 2 wins the battle!";
    for (let e = 0; e < currentCardIndex + 1; e++) {
      player2.push(player1[0]);
      player2.push(player2[0]);
      player1.splice(0, 1);
      player2.splice(0, 1);
    }
    if (player1.length === 0) {
      alert("Player 2 wins the battle!");
      confirm("Do you want to play again?");
    }
    currentCardIndex = 0;
  } else {
    let button = document.querySelector(".button");
    button.disabled = true;
    message.innerHTML = `
            <div>Dogrywka!</div><div><button class="drawButton">Rozstrzygnij bitwę!</button></div>
            `;
    currentCardIndex = currentCardIndex + 2;
    document.querySelector(".drawButton").onclick = nextMoveDraw;
  }
  renderNumberOfCards();
};

let nextMoveDraw = () => {
  boardPlayer1SecondCard.innerHTML +=
    "<img class='backOfCard' src='images/back.png'>";
  boardPlayer2SecondCard.innerHTML +=
    "<img class='backOfCard' src='images/back.png'>";
  boardPlayer1FirstCard.innerHTML +=
    "<img class='cardImage' src='images/" +
    player1[currentCardIndex].name +
    ".png'>";
  boardPlayer2FirstCard.innerHTML +=
    "<img class='cardImage' src='images/" +
    player2[currentCardIndex].name +
    ".png'>";
  let button = document.querySelector(".button");
  button.disabled = false;
  whoWins();
};

let nextMove = () => {
  boardPlayer1FirstCard.innerHTML =
    "<img class='cardImage' src='images/" +
    player1[currentCardIndex].name +
    ".png'>";
  boardPlayer2FirstCard.innerHTML =
    "<img class='cardImage' src='images/" +
    player2[currentCardIndex].name +
    ".png'>";
  let button = document.querySelector(".button");
  button.disabled = false;
  whoWins();
};

const init = () => {
  cardsDistribution();
  const button = document.querySelector(".button");
  button.onclick = nextMove;
  renderNumberOfCards();
};

window.onload = init;
