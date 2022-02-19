const talia = [
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

    { name: "Joker", power: 15 },
    { name: "Joker", power: 15 },

];

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
    numberOfCardsPlayer1.innerHTML = player1.length;
    numberOfCardsPlayer2.innerHTML = player2.length;
};

window.onload = renderNumberOfCards;

let cardsDistribution = () => {

    for (i = 0; i < numberOfCards; i++) {
        let randomKardIDplayer1 = Math.floor(Math.random() * talia.length);
        player1.push(talia[randomKardIDplayer1]);
        talia.splice(randomKardIDplayer1, 1);
    }

    for (z = 0; z < numberOfCards; z++) {
        let randomKardIDplayer2 = Math.floor(Math.random() * talia.length);
        player2.push(talia[randomKardIDplayer2]);
        talia.splice(randomKardIDplayer2, 1);
    }

};

let nextMove = () => {

    i = 0;

    boardPlayer1.innerHTML = player1[i].name;
    boardPlayer2.innerHTML = player2[i].name;

    let draw = () => {
        i = i + 2;
        boardPlayer1.innerHTML = player1[i].name;
        boardPlayer2.innerHTML = player2[i].name;
        let drawButton = document.querySelector("drawButton");
        drawButton.onclick = draw();

        if (player1[i].power > player2[i].power) {
            message.innerHTML = "Gracz 1 wygrywa bitwę!";
            for (var a = 0; a < i + 1; a++) {
                player1.push(player1[a]);
                player1.push(player2[a]);
                player1.splice(a, 1);
                player2.splice(a, 1);
            }
        } else {
            (player1[i].power < player2[i].power)
            message.innerHTML = "Gracz 2 wygrywa bitwę!";
            for (var b = 0; b < i + 1; b++) {
                player2.push(player1[b]);
                player2.push(player2[b]);
                player1.splice(b, 1);
                player2.splice(b, 1);
            };
        };
    };

    if (player1[i].power > player2[i].power) {
        player1.push(player1[i]);
        player1.push(player2[i]);
        player1.splice(i, 1);
        player2.splice(i, 1);
        message.innerHTML = "Gracz 1 wygrywa bitwę!";
    } else if (player1[i].power < player2[i].power) {
        player2.push(player1[i]);
        player2.push(player2[i]);
        player1.splice(i, 1);
        player2.splice(i, 1);
        message.innerHTML = "Gracz 2 wygrywa bitwę!";
    } else {
        message.innerHTML = `
        Dogrywka! <button class="drawButton">Rozstrzygnij bitwę!</button>
        `
    };
    renderNumberOfCards();
};

let render = () => {

    cardsDistribution();
    const button = document.querySelector("button");
    button.onclick = nextMove;
    console.log(player1);
    console.log(player2);
};

render();