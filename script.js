// create h1 element
const h1 = document.createElement("h1");
h1.textContent = "Card of the Day";

// append h1 and div to body
document.body.appendChild(h1);

// sound effects
const flipSound = new Audio("assets/cardflip.mp3"); 
flipSound.volume = 0.2;
flipSound.playbackRate = 2;

const cardsRWS = [
  { name: "The Fool", imgSrc: "cardsRWS/0_theFool.jpeg", alt: "The Fool", },
  { name: "The Magician", imgSrc: "cardsRWS/1_theMagician.jpeg", alt: "The Magician", },
  { name: "The High Priestess", imgSrc: "cardsRWS/2_theHighPriestess.jpeg", alt: "The High Priestess", },
  { name: "The Empress", imgSrc: "cardsRWS/3_theEmpress.jpeg", alt: "The Empress", },
  { name: "The Emperor", imgSrc: "cardsRWS/4_theEmperor.jpeg", alt: "The Emperor", },
  { name: "The Hierophant", imgSrc: "cardsRWS/5_theHierophant.jpeg", alt: "The Hierophant", },
  { name: "The Lovers", imgSrc: "cardsRWS/6_theLovers.jpeg", alt: "The Lovers", }, 
  { name: "The Chariot", imgSrc: "cardsRWS/7_theChariot.jpeg", alt: "The Chariot", },
  { name: "Strength", imgSrc: "cardsRWS/8_Strength.jpeg", alt: "Strength", },
  { name: "The Hermit", imgSrc: "cardsRWS/9_theHermit.jpeg", alt: "The Hermit", },
  { name: "Wheel of Fortune", imgSrc: "cardsRWS/10_wheelOfFortune.jpeg", alt: "Wheel of Fortune", },
  { name: "Justice", imgSrc: "cardsRWS/11_Justice.jpeg", alt: "Justice", },
  { name: "The Hanged Man", imgSrc: "cardsRWS/12_theHangedMan.jpeg", alt: "The Hanged Man" },
  { name: "Death", imgSrc: "cardsRWS/13_Death.jpeg", alt: "Death", },
  { name: "Temperance", imgSrc: "cardsRWS/14_Temperance.jpeg", alt: "Temperance", },
  { name: "The Devil", imgSrc: "cardsRWS/15_theDevil.jpeg", alt: "The Devil", },
  { name: "The Tower", imgSrc: "cardsRWS/16_theTower.jpeg", alt: "The Tower", },
  { name: "The Star", imgSrc: "cardsRWS/17_theStar.jpeg", alt: "The Star", },
  { name: "The Moon", imgSrc: "cardsRWS/18_theMoon.jpeg", alt: "The Moon", },
  { name: "The Sun", imgSrc: "cardsRWS/19_theSun.jpeg", alt: "The Sun", },
  { name: "Judgment", imgSrc: "cardsRWS/20_Judgment.jpeg", alt: "Judgment", },
  { name: "The World", imgSrc: "cardsRWS/21_theWorld.jpeg", alt: "The World", },
  { name: "Ace of Wands", imgSrc: "cardsRWS/W_AceofWands.jpeg", alt: "Ace of Wands", },
  { name: "Two of Wands", imgSrc: "cardsRWS/W_2ofWands.jpeg", alt: "Two of Wands", },
  { name: "Three of Wands", imgSrc: "cardsRWS/W_3ofWands.jpeg", alt: "Three of Wands", },
  { name: "Four of Wands", imgSrc: "cardsRWS/W_4ofWands.jpeg", alt: "Four of Wands", },
  { name: "Five of Wands", imgSrc: "cardsRWS/W_5ofWands.jpeg", alt: "Five of Wands", },
  { name: "Six of Wands", imgSrc: "cardsRWS/W_6ofWands.jpeg", alt: "Six of Wands", },
  { name: "Seven of Wands", imgSrc: "cardsRWS/W_7ofWands.jpeg", alt: "Seven of Wands", },
  { name: "Eight of Wands", imgSrc: "cardsRWS/W_8ofWands.jpeg", alt: "Eight of Wands", },
  { name: "Nine of Wands", imgSrc: "cardsRWS/W_9ofWands.jpeg", alt: "Nine of Wands", },
  { name: "Ten of Wands", imgSrc: "cardsRWS/W_10ofWands.jpeg", alt: "Ten of Wands", },
  { name: "Page of Wands", imgSrc: "cardsRWS/W_PageofWands.jpeg", alt: "Page of Wands", },
  { name: "Knight of Wands", imgSrc: "cardsRWS/W_KnightofWands.jpeg", alt: "Knight of Wands", },
  { name: "Queen of Wands", imgSrc: "cardsRWS/W_QueenofWands.jpeg", alt: "Queen of Wands", },
  { name: "King of Wands", imgSrc: "cardsRWS/W_KingofWands.jpeg", alt: "King of Wands", },
  { name: "Ace of Cups", imgSrc: "cardsRWS/C_AceofCups.jpeg", alt: "Ace of Cups", },
  { name: "Two of Cups", imgSrc: "cardsRWS/C_2ofCups.jpeg", alt: "Two of Cups", },
  { name: "Three of Cups", imgSrc: "cardsRWS/C_3ofCups.jpeg", alt: "Three of Cups", },
  { name: "Four of Cups", imgSrc: "cardsRWS/C_4ofCups.jpeg", alt: "Four of Cups", },
  { name: "Five of Cups", imgSrc: "cardsRWS/C_5ofCups.jpeg", alt: "Five of Cups", },
  { name: "Six of Cups", imgSrc: "cardsRWS/C_6ofCups.jpeg", alt: "Six of Cups", },
  { name: "Seven of Cups", imgSrc: "cardsRWS/C_7ofCups.jpeg", alt: "Seven of Cups", },
  { name: "Eight of Cups", imgSrc: "cardsRWS/C_8ofCups.jpeg", alt: "Eight of Cups", },
  { name: "Nine of Cups", imgSrc: "cardsRWS/C_9ofCups.jpeg", alt: "Nine of Cups", },
  { name: "Ten of Cups", imgSrc: "cardsRWS/C_10ofCups.jpeg", alt: "Ten of Cups", },
  { name: "Page of Cups", imgSrc: "cardsRWS/C_PageofCups.jpeg", alt: "Page of Cups", },
  { name: "Knight of Cups", imgSrc: "cardsRWS/C_KnightofCups.jpeg", alt: "Knight of Cups", },
  { name: "Queen of Cups", imgSrc: "cardsRWS/C_QueenofCups.jpeg", alt: "Queen of Cups", },
  { name: "King of Cups", imgSrc: "cardsRWS/C_KingofCups.jpeg", alt: "King of Cups", },
  { name: "Ace of Swords", imgSrc: "cardsRWS/S_AceofSwords.jpeg", alt: "Ace of Swords", },
  { name: "Two of Swords", imgSrc: "cardsRWS/S_2ofSwords.jpeg", alt: "Two of Swords", },
  { name: "Three of Swords", imgSrc: "cardsRWS/S_3ofSwords.jpeg", alt: "Three of Swords", },
  { name: "Four of Swords", imgSrc: "cardsRWS/S_4ofSwords.jpeg", alt: "Four of Swords", },
  { name: "Five of Swords", imgSrc: "cardsRWS/S_5ofSwords.jpeg", alt: "Five of Swords", },
  { name: "Six of Swords", imgSrc: "cardsRWS/S_6ofSwords.jpeg", alt: "Six of Swords", },
  { name: "Seven of Swords", imgSrc: "cardsRWS/S_7ofSwords.jpeg", alt: "Seven of Swords", },
  { name: "Eight of Swords", imgSrc: "cardsRWS/S_8ofSwords.jpeg", alt: "Eight of Swords", },
  { name: "Nine of Swords", imgSrc: "cardsRWS/S_9ofSwords.jpeg", alt: "Nine of Swords", },
  { name: "Ten of Swords", imgSrc: "cardsRWS/S_10ofSwords.jpeg", alt: "Ten of Swords", },
  { name: "Page of Swords", imgSrc: "cardsRWS/S_PageofSwords.jpeg", alt: "Page of Swords", },
  { name: "Knight of Swords", imgSrc: "cardsRWS/S_KnightofSwords.jpeg", alt: "Knight of Swords", },  
  { name: "Queen of Swords", imgSrc: "cardsRWS/S_QueenofSwords.jpeg", alt: "Queen of Swords", },
  { name: "King of Swords", imgSrc: "cardsRWS/S_KingofSwords.jpeg", alt: "King of Swords", },
  { name: "Ace of Pentacles", imgSrc: "cardsRWS/P_AceofPentacles.jpeg", alt: "Ace of Pentacles", },
  { name: "Two of Pentacles", imgSrc: "cardsRWS/P_2ofPentacles.jpeg", alt: "Two of Pentacles", },
  { name: "Three of Pentacles", imgSrc: "cardsRWS/P_3ofPentacles.jpeg", alt: "Three of Pentacles", },
  { name: "Four of Pentacles", imgSrc: "cardsRWS/P_4ofPentacles.jpeg", alt: "Four of Pentacles", },
  { name: "Five of Pentacles", imgSrc: "cardsRWS/P_5ofPentacles.jpeg", alt: "Five of Pentacles", },
  { name: "Six of Pentacles", imgSrc: "cardsRWS/P_6ofPentacles.jpeg", alt: "Six of Pentacles", },
  { name: "Seven of Pentacles", imgSrc: "cardsRWS/P_7ofPentacles.jpeg", alt: "Seven of Pentacles", },
  { name: "Eight of Pentacles", imgSrc: "cardsRWS/P_8ofPentacles.jpeg", alt: "Eight of Pentacles", },
  { name: "Nine of Pentacles", imgSrc: "cardsRWS/P_9ofPentacles.jpeg", alt: "Nine of Pentacles", },
  { name: "Ten of Pentacles", imgSrc: "cardsRWS/P_10ofPentacles.jpeg", alt: "Ten of Pentacles", },
  { name: "Page of Pentacles", imgSrc: "cardsRWS/P_PageofPentacles.jpeg", alt: "Page of Pentacles", },
  { name: "Knight of Pentacles", imgSrc: "cardsRWS/P_KnightofPentacles.jpeg", alt: "Knight of Pentacles", },
  { name: "Queen of Pentacles", imgSrc: "cardsRWS/P_QueenofPentacles.jpeg", alt: "Queen of Pentacles", },
  { name: "King of Pentacles", imgSrc: "cardsRWS/P_KingofPentacles.jpeg", alt: "King of Pentacles", },
];

// create main element
const mainElement = document.createElement("main");

// add "spread" class to main element
mainElement.classList.add("spread");

// create three cards with labels
for (let i = 0; i < 1; i++) {
  // create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // append card to main element
  mainElement.appendChild(card);
}

// add main element to the document
document.body.appendChild(mainElement); 

// add event listener to each card
const cardElements = document.querySelectorAll(".card");
cardElements.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    console.log("Card flipped!");
    flipSound.play();
    const randomIndex = Math.floor(Math.random() * cardsRWS.length);
    const randomCard = cardsRWS[randomIndex];
    card.style.backgroundImage = `url(${randomCard.imgSrc})`;
  });
});



// Cards from https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
// Authorship: Arthur Edward Waite, Artist: Pamela Colman Smith.
// Waite was the copyright holder and he died in 1942. His renwed copyright lasted until 1966, at which point the deck became part of the public domain.