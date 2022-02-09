const talia = [
    { name: "2 pik", power: 1 },
    { name: "2 trefl", power: 1 },
    { name: "2 karo", power: 1 },
    { name: "2 kier", power: 1 },

    { name: "3 pik", power: 2 },
    { name: "3 trefl", power: 2 },
    { name: "3 karo", power: 2 },
    { name: "3 kier", power: 2 },

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
    { name: "Joper kier", power: 11 },

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

    { name: "Joker", power: 15 },
    { name: "Joker", power: 15 },

];

//     "2 pik","2 trefl", "2 karo", "2 kier",
//     "3 pik", "3 trefl", "3 karo", "3 kier",
//     "4 pik", "4 trefl", "4 karo", "4 kier",
//     "5 pik", "5 trefl", "5 karo", "5 kier",
//     "6 pik", "6 trefl", "6 karo", "6 kier",
//     "7 pik", "7 trefl", "7 karo", "7 kier",
//     "8 pik", "8 trefl", "8 karo", "8 kier",
//     "9 pik", "9 trefl", "9 karo", "9 kier",
//     "10 pik", "10 trefl", "10 karo", "10 kier",
//     "Jopek pik", "Jopek trefl", "Jopek karo", "Jopek kier",
//     "Dama pik", "Dama trefl", "Dama karo", "Dama kier",
//     "Król pik", "Król trefl", "Król karo", "Król kier",
//     "As pik", "As trefl", "As karo", "As kier",
//     "Joker1", "Joker2"

const numberOfCards = talia.length / 2;

let player1 = [];
let player2 = [];
let player1WonCards = [];
let player2WonCards = [];
let boardPlayer1 = document.querySelector(".boardPlayer1");
let boardPlayer2 = document.querySelector(".boardPlayer2");
let message = document.querySelector(".message");
let numberOfCardsPlayer1 = document.querySelector(".numberOfCardsPlayer1");
let numberOfCardsPlayer2 = document.querySelector(".numberOfCardsPlayer2");

let renderNumberOfCards = () => {
    numberOfCardsPlayer1.innerHTML = player1.length + player1WonCards.length;
    numberOfCardsPlayer2.innerHTML = player2.length + player2WonCards.length;
};

window.onload = renderNumberOfCards;


let cardsDistribution = () => {

    for (i = 0; i < numberOfCards; i++) {
        //losowe id z talii
        let randomKardIDplayer1 = Math.floor(Math.random() * talia.length);
        player1.push(talia[randomKardIDplayer1]);
        talia.splice(randomKardIDplayer1, 1);
    }

    for (z = 0; z < numberOfCards; z++) {
        //losowe id z talii
        let randomKardIDplayer2 = Math.floor(Math.random() * talia.length);
        player2.push(talia[randomKardIDplayer2]);
        talia.splice(randomKardIDplayer2, 1);
    }

};

let nextMove = () => {
    //let nextMovePlayer1 = () => {
    i = 0;
    if (player1.length === 0) {

    }
    let movePlayer1 = player1[i].name;
    boardPlayer1.innerHTML = movePlayer1;
    z = 0;
    let movePlayer2 = player2[z].name;
    boardPlayer2.innerHTML = movePlayer2;
    //}
    //nextMovePlayer1();
    if (player1[i].power > player2[z].power) {
        player1WonCards.push(player1[i]);
        player1WonCards.push(player2[z]);
        message.innerHTML = "Gracz 1 wygrywa bitwę!"
    } else if (player1[i].power < player2[z].power) {
        player2WonCards.push(player1[i]);
        player2WonCards.push(player2[z]);
        message.innerHTML = "Gracz 2 wygrywa bitwę!"
    } else {
        message.innerHTML = "Dogrywka! <button>Rozstrzygnij bitwę!</button>"
    }

    //let nextMovePlayer2 = () => {

    player1.splice(i, 1);
    player2.splice(z, 1);
    renderNumberOfCards();
    //}
    //nextMovePlayer2();
};

let render = () => {

    cardsDistribution();
    let button = document.querySelector("button");
    button.onclick = nextMove;

};

render();