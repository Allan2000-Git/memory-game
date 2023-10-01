const gridArray = [
    {
        name:'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name:'fries',
        img: './images/fries.png'
    },
    {
        name:'hotdog',
        img: './images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: './images/milkshake.png'
    },
    {
        name:'pizza',
        img: './images/pizza.png'
    },
    {
        name:'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name:'fries',
        img: './images/fries.png'
    },
    {
        name:'hotdog',
        img: './images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: './images/milkshake.png'
    },
    {
        name:'pizza',
        img: './images/pizza.png'
    }
]

const grid = document.getElementById('grid');
const result = document.getElementById('score');


//shuffle/sort the array randomly
gridArray.sort((a, b) => 0.5 - Math.random())

function createGrid(){
    // gridArray.forEach((gridItem)=>{
    //     const img = document.createElement('img');
    //     img.src = gridItem.img;
    // })
    for(let i=0;i<gridArray.length;i++){
        const img = document.createElement('img');
        img.setAttribute('src', './images/blank.png');
        img.setAttribute('data-id', i);
        img.style.cursor = 'pointer';
        img.addEventListener('click',flipCard);
        grid.appendChild(img);
    }
}

console.log(gridArray);

createGrid();

let chosenCards = [];
let chosenCardsIds = [];

const cardsWon=[];

let score=0;

function compareCards(){
    const allCards = document.querySelectorAll('img');

    if(chosenCards[0] === chosenCards[1]){
        allCards[chosenCardsIds[0]].setAttribute('src','./images/blank.png');
        allCards[chosenCardsIds[1]].setAttribute('src','./images/blank.png');
        alert('You clicked the same card')
    }

    if(chosenCards[0] === chosenCards[1]){
        alert('You got it!');
        allCards[chosenCardsIds[0]].setAttribute('src','./images/white.png');
        allCards[chosenCardsIds[1]].setAttribute('src','./images/white.png');
        allCards[chosenCardsIds[0]].removeEventListener('click',flipCard);
        allCards[chosenCardsIds[1]].removeEventListener('click',flipCard);
        score+=1;
        cardsWon.push(chosenCards);
    } else{
        alert('No match. Try again');
        allCards[chosenCardsIds[0]].setAttribute('src','./images/blank.png');
        allCards[chosenCardsIds[1]].setAttribute('src','./images/blank.png');
    }

    result.innerText=score;

    chosenCards = [];
    chosenCardsIds=[];

    if(cardsWon.length === gridArray.length/2){
        result.innerText='Congratulations ! You got them all';

    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    this.setAttribute('src',gridArray[cardId].img);
    chosenCards.push(gridArray[cardId].name);
    chosenCardsIds.push(cardId);
    if(chosenCards.length === 2){
        setTimeout(compareCards,500);
    }
}