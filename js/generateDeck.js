"use strict";

const ul = document.querySelector(".cards");
const emojis = ["🤯", "💣", "❤️", "🚀", "🥳", "👀", "🏠", "👻"];
// Esta función nos imprime por pantalla las 16 cartas
const generateDeck = () => {
  const deck = [...emojis, ...emojis];

  while (deck.length > 0) {
    const cardIndex = Math.floor(Math.random() * deck.length);
    const card = deck[cardIndex];
    const li = document.createElement("li");
    li.innerHTML = `<div class="content"><div class="front"><div class="frontIcon">👽</div></div><div class="back">${card}</div></div>`;
    li.classList.add("card");
    ul.append(li);
    deck.splice(cardIndex, 1);
  }
};
export { generateDeck, ul, emojis };
