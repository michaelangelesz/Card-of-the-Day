// object constructor for cards
function card(name, suit, rank, image) {
    this.name = name;
    this.suit = suit;
    this.rank = rank;
    this.image = image;
    this.interpretation = interpretation;
}

var deck = [
    new card("The Fool", "Major Arcana", 0, "cardsRWS/0_theFool.jpeg", ""),
    new card("The Magician", "Major Arcana", 1, "cardsRWS/1_theMagician.jpeg", ""),
    new card("The High Priestess", "Major Arcana", 2, "cardsRWS/2_theHighPriestess.jpeg", ""),
    new card("The Empress", "Major Arcana", 3, "cardsRWS/3_theEmpress.jpeg", ""),
    new card("The Emperor", "Major Arcana", 4, "cardsRWS/4_theEmperor.jpeg", ""),
    new card("The Hierophant", "Major Arcana", 5, "cardsRWS/5_theHierophant.jpeg", ""),
    new card("The Lovers", "Major Arcana", 6, "cardsRWS/6_theLovers.jpeg", ""),
    new card("The Chariot", "Major Arcana", 7, "cardsRWS/7_theChariot.jpeg", ""),
    new card("Strength", "Major Arcana", 8, "cardsRWS/8_Strength.jpeg", ""),
    new card("The Hermit", "Major Arcana", 9, "cardsRWS/9_theHermit.jpeg", ""),
    new card("Wheel of Fortune", "Major Arcana", 10, "cardsRWS/10_WheelOfFortune.jpeg", ""),
    new card("Justice", "Major Arcana", 11, "cardsRWS/11_Justice.jpeg", ""),
    new card("The Hanged Man", "Major Arcana", 12, "cardsRWS/12_theHangedMan.jpeg", ""),
    new card("Death", "Major Arcana", 13, "cardsRWS/13_Death.jpeg", ""),
    new card("Temperance", "Major Arcana", 14, "cardsRWS/14_Temperance.jpeg", ""),
    new card("The Devil", "Major Arcana", 15, "cardsRWS/15_theDevil.jpeg", ""),
    new card("The Tower", "Major Arcana", 16, "cardsRWS/16_theTower.jpeg", ""),
    new card("The Star", "Major Arcana", 17, "cardsRWS/17_theStar.jpeg", ""),
    new card("The Moon", "Major Arcana", 18, "cardsRWS/18_theMoon.jpeg", ""),
    new card("The Sun", "Major Arcana", 19, "cardsRWS/19_theSun.jpeg", ""),
    new card("Judgement", "Major Arcana", 20, "cardsRWS/20_Judgement.jpeg", ""),
    new card("The World", "Major Arcana", 21, "cardsRWS/21_theWorld.jpeg", ""),
    new card("Ace of Wands", "Wands", 1, "cardsRWS/W_AceofWands.jpeg", ""),
    new card("Two of Wands", "Wands", 2, "cardsRWS/W_2ofWands.jpeg", ""),
    new card("Three of Wands", "Wands", 3, "cardsRWS/W_3ofWands.jpeg", ""),
    new card("Four of Wands", "Wands", 4, "cardsRWS/W_4ofWands.jpeg", ""),
    new card("Five of Wands", "Wands", 5, "cardsRWS/W_5ofWands.jpeg", ""),
    new card("Six of Wands", "Wands", 6, "cardsRWS/W_6ofWands.jpeg", ""),
    new card("Seven of Wands", "Wands", 7, "cardsRWS/W_7ofWands.jpeg", ""),
    new card("Eight of Wands", "Wands", 8, "cardsRWS/W_8ofWands.jpeg", ""),
    new card("Nine of Wands", "Wands", 9, "cardsRWS/W_9ofWands.jpeg", ""),
    new card("Ten of Wands", "Wands", 10, "cardsRWS/W_10ofWands.jpeg", ""),
    new card("Page of Wands", "Wands", 11, "cardsRWS/W_PageofWands.jpeg", ""),
    new card("Knight of Wands", "Wands", 12, "cardsRWS/W_KnightofWands.jpeg", ""),
    new card("Queen of Wands", "Wands", 13, "cardsRWS/W_QueenofWands.jpeg", ""),
    new card("King of Wands", "Wands", 14, "cardsRWS/W_KingofWands.jpeg", ""),
    new card("Ace of Cups", "Cups", 1, "cardsRWS/C_AceofCups.jpeg", ""),
    new card("Two of Cups", "Cups", 2, "cardsRWS/C_2ofCups.jpeg", ""),
    new card("Three of Cups", "Cups", 3, "cardsRWS/C_3ofCups.jpeg", ""),
    new card("Four of Cups", "Cups", 4, "cardsRWS/C_4ofCups.jpeg", ""),
    new card("Five of Cups", "Cups", 5, "cardsRWS/C_5ofCups.jpeg", ""),
    new card("Six of Cups", "Cups", 6, "cardsRWS/C_6ofCups.jpeg", ""),
    new card("Seven of Cups", "Cups", 7, "cardsRWS/C_7ofCups.jpeg", ""),
    new card("Eight of Cups", "Cups", 8, "cardsRWS/C_8ofCups.jpeg", ""),
    new card("Nine of Cups", "Cups", 9, "cardsRWS/C_9ofCups.jpeg", ""),
    new card("Ten of Cups", "Cups", 10, "cardsRWS/C_10ofCups.jpeg", ""),
    new card("Page of Cups", "Cups", 11, "cardsRWS/C_PageofCups.jpeg", ""),
    new card("Knight of Cups", "Cups", 12, "cardsRWS/C_KnightofCups.jpeg", ""),
    new card("Queen of Cups", "Cups", 13, "cardsRWS/C_QueenofCups.jpeg", ""),
    new card("King of Cups", "Cups", 14, "cardsRWS/C_KingofCups.jpeg", ""),
    new card("Ace of Swords", "Swords", 1, "cardsRWS/S_AceofSwords.jpeg", ""),
    new card("Two of Swords", "Swords", 2, "cardsRWS/S_2ofSwords.jpeg", ""),
    new card("Three of Swords", "Swords", 3, "cardsRWS/S_3ofSwords.jpeg", ""),
    new card("Four of Swords", "Swords", 4, "cardsRWS/S_4ofSwords.jpeg", ""),
    new card("Five of Swords", "Swords", 5, "cardsRWS/S_5ofSwords.jpeg", ""),
    new card("Six of Swords", "Swords", 6, "cardsRWS/S_6ofSwords.jpeg", ""),
    new card("Seven of Swords", "Swords", 7, "cardsRWS/S_7ofSwords.jpeg", ""),
    new card("Eight of Swords", "Swords", 8, "cardsRWS/S_8ofSwords.jpeg", ""),
    new card("Nine of Swords", "Swords", 9, "cardsRWS/S_9ofSwords.jpeg", ""),
    new card("Ten of Swords", "Swords", 10, "cardsRWS/S_10ofSwords.jpeg", ""),
    new card("Page of Swords", "Swords", 11, "cardsRWS/S_PageofSwords.jpeg", ""),
    new card("Knight of Swords", "Swords", 12, "cardsRWS/S_KnightofSwords.jpeg", ""),
    new card("Queen of Swords", "Swords", 13, "cardsRWS/S_QueenofSwords.jpeg", ""),
    new card("King of Swords", "Swords", 14, "cardsRWS/S_KingofSwords.jpeg", ""),
    new card("Ace of Pentacles", "Pentacles", 1, "cardsRWS/P_AceofPentacles.jpeg", ""),
    new card("Two of Pentacles", "Pentacles", 2, "cardsRWS/P_2ofPentacles.jpeg", ""),
    new card("Three of Pentacles", "Pentacles", 3, "cardsRWS/P_3ofPentacles.jpeg", ""),
    new card("Four of Pentacles", "Pentacles", 4, "cardsRWS/P_4ofPentacles.jpeg", ""),
    new card("Five of Pentacles", "Pentacles", 5, "cardsRWS/P_5ofPentacles.jpeg", ""),
    new card("Six of Pentacles", "Pentacles", 6, "cardsRWS/P_6ofPentacles.jpeg", ""),
    new card("Seven of Pentacles", "Pentacles", 7, "cardsRWS/P_7ofPentacles.jpeg", ""),
    new card("Eight of Pentacles", "Pentacles", 8, "cardsRWS/P_8ofPentacles.jpeg", ""),
    new card("Nine of Pentacles", "Pentacles", 9, "cardsRWS/P_9ofPentacles.jpeg", ""),
    new card("Ten of Pentacles", "Pentacles", 10, "cardsRWS/P_10ofPentacles.jpeg", ""),
    new card("Page of Pentacles", "Pentacles", 11, "cardsRWS/P_PageofPentacles.jpeg", ""),
    new card("Knight of Pentacles", "Pentacles", 12, "cardsRWS/P_KnightofPentacles.jpeg", ""),
    new card("Queen of Pentacles", "Pentacles", 13, "cardsRWS/P_QueenofPentacles.jpeg", ""),
    new card("King of Pentacles", "Pentacles", 14, "cardsRWS/P_KingofPentacles.jpeg", ""),
];

function getRandom(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("draw").onclick = function () {
  var index = getRandom(78);
  var currentCard = deck[index];

  document.getElementById("display").innerHTML =
    "<img src='cardsRWS/" +
    currentCard.image +
    ".jpeg'/><h3>" +
    currentCard.name +
    "</h3><p>" +
    currentCard.interpretation +
    "</p>";
};

// Cards from https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
// Authorship: Arthur Edward Waite, Artist: Pamela Colman Smith.
// Waite was the copyright holder and he died in 1942. His renwed copyright lasted until 1966, at which point the deck became part of the public domain.