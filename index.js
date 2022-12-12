import { getSearchResults } from "./components/search-bar/search-bar.js";
import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchInput = document.querySelector('[data-js="search-bar_inputField"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (response.ok) {
      // Success (Good Response)
      const data = await response.json();
      console.log(data.results);
      const results = data.results;
      results.forEach((result) => {
        const cardItem = createCharacterCard(result);
        cardContainer.append(cardItem);
      });
    } else {
      // Failure (Bad Response)
      console.error("Bad Response");
    }
  } catch (error) {
    // Failure (Network error, etc)
    console.error("An Error occurred");
  }
}
fetchCharacters();

searchBar.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const searchResults = await getSearchResults(data.query);
  showSearchResults(searchResults);
});

function showSearchResults(results) {
  cardContainer.innerHTML = "";

  results.forEach((result) => {
    const cardItem = createCharacterCard(result);
    cardContainer.append(cardItem);
  });
}
