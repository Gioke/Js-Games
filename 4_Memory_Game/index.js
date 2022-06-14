document.addEventListener('DomContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'bear',
            img: 'Images/Bear.png'
        },
        {
            name: 'bear',
            img: 'Images/Bear.png'
        },
        {
            name: 'cat',
            img: 'Images/Cat.png'
        },
        {
            name: 'cat',
            img: 'Images/Cat.png'
        },
        {
            name: 'chicken',
            img: 'Images/Chicken.png'
        },
        {
            name: 'chicken',
            img: 'Images/Chicken.png'
        },
        {
            name: 'cow',
            img: 'Images/Cow.png'
        },
        {
            name: 'cow',
            img: 'Images/Cow.png'
        },
        {
            name: 'dog',
            img: 'Images/Dog.png'
        },
        {
            name: 'dog',
            img: 'Images/Dog.png'
        },
        {
            name: 'fox',
            img: 'Images/Fox.png'
        },
        {
            name: 'fox',
            img: 'Images/Fox.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('#result')
const cardsChosen = []
const cardsChosenId = []
const cardsWon = []

 //create board
 const createBoard = () => {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'Images/Card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
 }

})

//check for matches
const checkForMatch = () => {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert ('You found a match')
        cards[optionOneId].setAttribute('src', '.Images/White.png')
        cards[optionTwoId].setAttribute('src', '.Images/White.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', '.Images/Card.png')
        cards[optionTwoId].setAttribute('src', '.Images/Card.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations!! You found them all!!'
    }
}

//flip your card
const flipCard = () => {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
    createBoard()
}

