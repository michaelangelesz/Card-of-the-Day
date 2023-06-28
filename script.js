// object constructor
function card(name, description, image) {
  this.name = name;
  this.description = description;
  this.image = image;
}

var deck = [
  new card("The Fool", "The Fool", "0_theFool"),
  new card("The Magician", "The Magician", "1_theMagician"),
  new card("The High Priestess", "The High Priestess", "2_theHighPriestess"),
  new card("The Empress", "The Empress", "3_theEmpress"),
  new card("The Emperor", "The Emperor", "4_theEmperor"),
  new card("The Hierophant", "The Hierophant", "5_theHierophant"),
  new card("The Lovers", "The Lovers", "6_theLovers"),
  new card("The Chariot", "The Chariot", "7_theChariot"),
  new card("Strength", "Strength", "8_Strength"),
  new card("The Hermit", "The Hermit", "9_theHermit"),
  new card("Wheel of Fortune", "Wheel of Fortune", "10_wheelOfFortune"),
  new card("Justice", "Justice", "11_Justice"),
  new card("The Hanged Man", "The Hanged Man", "12_theHangedMan"),
  new card("Death", "Death", "13_Death"),
  new card("Temperance", "Temperance", "14_Temperance"),
  new card("The Devil", "The Devil", "15_theDevil"),
  new card("The Tower", "The Tower", "16_theTower"),
  new card("The Star", "The Star", "17_theStar"),
  new card("The Moon", "The Moon", "18_theMoon"),
  new card("The Sun", "The Sun", "19_theSun"),
  new card("Judgment", "Judgment", "20_Judgment"),
  new card("The World", "The World", "21_theWorld"),
  new card("Ace of Wands", "Ace of Wands", "W_AceofWands"),
  new card("Two of Wands", "Two of Wands", "W_2ofWands"),
  new card("Three of Wands", "Three of Wands", "W_3ofWands"),
  new card("Four of Wands", "Four of Wands", "W_4ofWands"),
  new card("Five of Wands", "Five of Wands", "W_5ofWands"),
  new card("Six of Wands", "Six of Wands", "W_6ofWands"),
  new card("Seven of Wands", "Seven of Wands", "W_7ofWands"),
  new card("Eight of Wands", "Eight of Wands", "W_8ofWands"),
  new card("Nine of Wands", "Nine of Wands", "W_9ofWands"),
  new card("Ten of Wands", "Ten of Wands", "W_10ofWands"),
  new card("Page of Wands", "Page of Wands", "W_PageofWands"),
  new card("Knight of Wands", "Knight of Wands", "W_KnightofWands"),
  new card("Queen of Wands", "Queen of Wands", "W_QueenofWands"),
  new card("King of Wands", "King of Wands", "W_KingofWands"),
  new card("Ace of Cups", "Ace of Cups", "C_AceofCups"),
  new card("Two of Cups", "Two of Cups", "C_2ofCups"),
  new card("Three of Cups", "Three of Cups", "C_3ofCups"),
  new card("Four of Cups", "Four of Cups", "C_4ofCups"),
  new card("Five of Cups", "Five of Cups", "C_5ofCups"),
  new card("Six of Cups", "Six of Cups", "C_6ofCups"),
  new card("Seven of Cups", "Seven of Cups", "C_7ofCups"),
  new card("Eight of Cups", "Eight of Cups", "C_8ofCups"),
  new card("Nine of Cups", "Nine of Cups", "C_9ofCups"),
  new card("Ten of Cups", "Ten of Cups", "C_10ofCups"),
  new card("Page of Cups", "Page of Cups", "C_PageofCups"),
  new card("Knight of Cups", "Knight of Cups", "C_KnightofCups"),
  new card("Queen of Cups", "Queen of Cups", "C_QueenofCups"),
  new card("King of Cups", "King of Cups", "C_KingofCups"),
  new card("Ace of Swords", "Ace of Swords", "S_AceofSwords"),
  new card("Two of Swords", "Two of Swords", "S_2ofSwords"),
  new card("Three of Swords", "Three of Swords", "S_3ofSwords"),
  new card("Four of Swords", "Four of Swords", "S_4ofSwords"),
  new card("Five of Swords", "Five of Swords", "S_5ofSwords"),
  new card("Six of Swords", "Six of Swords", "S_6ofSwords"),
  new card("Seven of Swords", "Seven of Swords", "S_7ofSwords"),
  new card("Eight of Swords", "Eight of Swords", "S_8ofSwords"),
  new card("Nine of Swords", "Nine of Swords", "S_9ofSwords"),
  new card("Ten of Swords", "Ten of Swords", "S_10ofSwords"),
  new card("Page of Swords", "Page of Swords", "S_PageofSwords"),
  new card("Knight of Swords", "Knight of Swords", "S_KnightofSwords"),
  new card("Queen of Swords", "Queen of Swords", "S_QueenofSwords"),
  new card("King of Swords", "King of Swords", "S_KingofSwords"),
  new card("Ace of Pentacles", "Ace of Pentacles", "P_AceofPentacles"),
  new card("Two of Pentacles", "Two of Pentacles", "P_2ofPentacles"),
  new card("Three of Pentacles", "Three of Pentacles", "P_3ofPentacles"),
  new card("Four of Pentacles", "Four of Pentacles", "P_4ofPentacles"),
  new card("Five of Pentacles", "Five of Pentacles", "P_5ofPentacles"),
  new card("Six of Pentacles", "Six of Pentacles", "P_6ofPentacles"),
  new card("Seven of Pentacles", "Seven of Pentacles", "P_7ofPentacles"),
  new card("Eight of Pentacles", "Eight of Pentacles", "P_8ofPentacles"),
  new card("Nine of Pentacles", "Nine of Pentacles", "P_9ofPentacles"),
  new card("Ten of Pentacles", "Ten of Pentacles", "P_10ofPentacles"),
  new card("Page of Pentacles", "Page of Pentacles", "P_PageofPentacles"),
  new card("Knight of Pentacles", "Knight of Pentacles", "P_KnightofPentacles"),
  new card("Queen of Pentacles", "Queen of Pentacles", "P_QueenofPentacles"),
  new card("King of Pentacles", "King of Pentacles", "P_KingofPentacles"),
];

function getRandom(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("draw").onclick = function () {
  var index = getRandom(78);
  var currentCard = deck[index];

  document.getElementById("display").innerHTML =
    '<img src="cardsRWS/' +
    currentCard.image +
    '.jpeg"><h3>';// +
    // currentCard.name +
    // '</h3><p>' +
    // currentCard.description +
    // '</p>';
};

// Cards from https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
// Authorship: Arthur Edward Waite, Artist: Pamela Colman Smith.
// Waite was the copyright holder and he died in 1942. His renwed copyright lasted until 1966, at which point the deck became part of the public domain.
