const talia = [
    "2 pik", "2 trefl", "2 karo", "2 kier",
    "3 pik", "3 trefl", "3 karo", "3 kier",
    "4 pik", "4 trefl", "4 karo", "4 kier",
    "5 pik", "5 trefl", "5 karo", "5 kier",
    "6 pik", "6 trefl", "6 karo", "6 kier",
    "7 pik", "7 trefl", "7 karo", "7 kier",
    "8 pik", "8 trefl", "8 karo", "8 kier",
    "9 pik", "9 trefl", "9 karo", "9 kier",
    "10 pik", "10 trefl", "10 karo", "10 kier",
    "Jopek pik", "Jopek trefl", "Jopek karo", "Jopek kier",
    "Dama pik", "Dama trefl", "Dama karo", "Dama kier",
    "Król pik", "Król trefl", "Król karo", "Król kier",
    "As pik", "As trefl", "As karo", "As kier",
    "Joker1", "Joker2"
];

const numberOfCards = talia.length / 2;

let player1 = [];
let player2 = [];
let boardPlayer1 = document.querySelector(".boardPlayer1");
let boardPlayer2 = document.querySelector(".boardPlayer2");


let cardsDistribution = () => {

    for (i = 0; i < numberOfCards; i++) {
        //losowe id z talii
        let randomKardIDplayer1 = Math.floor(Math.random() * talia.length);
        player1.push(talia[randomKardIDplayer1]);
        talia.splice(randomKardIDplayer1, 1);
    }
    console.log(player1);

    for (z = 0; z < numberOfCards; z++) {
        //losowe id z talii
        let randomKardIDplayer2 = Math.floor(Math.random() * talia.length);
        player2.push(talia[randomKardIDplayer2]);
        talia.splice(randomKardIDplayer2, 1);
    }

    console.log(player2);

}

let nextMove = () => {
    let nextMovePlayer1 = () => {
        i = 0
        boardPlayer1.innerHTML = player1[i];
        i++;
    }
    nextMovePlayer1();

    let nextMovePlayer2 = () => {
        i = 0
        boardPlayer2.innerHTML = player2[i];
        i++;
    }
    nextMovePlayer2();
}

let render = () => {

    cardsDistribution();
    nextMove();

};

render();