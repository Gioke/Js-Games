let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck;

let canhit = true;

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

const buildDeck = () => {
    let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let types = ['H','C','D','S'];
    deck = [];

    for(let i = 0; i < types.length; i++) {
        for (let j = 0; j <values.length; j++){
            deck.push(values[j] + "-" + types[i]);
        }
    }   
}

const shuffleDeck = () => {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

const startGame = () => {
    
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }
    
    console.log(yourSum);
    document.getElementById('hit').addEventListener('click', hit);
    document.getElementById('stay').addEventListener('click', stay);

}

const hit = () => {
    if (!canhit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) {
        canhit = false;
    }
}

const stay = () => {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);
    while (dealerSum < 17) {
            let cardImg = document.createElement("img");
            let card = deck.pop();
            cardImg.src = "./cards/" + card + ".png";
            dealerSum += getValue(card);
            dealerAceCount += checkAce(card);
            document.getElementById("dealer-cards").append(cardImg);
        }
    
    document.getElementById('hidden').style.visibility="hidden"


    canhit = false;

    let message = "";
    if (yourSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You Win!";
    }
    else if (yourSum == dealerSum){
        message = "Tie!";
    }
    else if (yourSum > dealerSum) {
        message = "You Win!";
    }
    else if (yourSum < dealerSum) {
        message = "You Lose!"; 
    }
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
}

const getValue = (card) => {
    let data = card.split("-");
    let value = data[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

const reduceAce = (playerSum, playerAceCount) => {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}

document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
  });
