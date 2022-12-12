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
let maxPage = 1;
let page = 1;
let searchQuery = "";

nextButton.addEventListener("click", async () => {
  if (page === maxPage) {
    return;
  } else {
    page = page + 1;
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
    fetchCharacters(url);
  }
});

prevButton.addEventListener("click", async () => {
  if (page <= 1) {
    return;
  } else {
    page = page - 1;
    console.log(page);
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
    fetchCharacters(url);
  }
});

// ------------------------- DEFAULT FETCH -------------------------

async function fetchCharacters(url) {
  cardContainer.innerHTML = "";

  const searchResults = await getSearchResults(url);
  maxPage = searchResults.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  showSearchResults(searchResults.results);
}
fetchCharacters("https://rickandmortyapi.com/api/character/?page=1");

// ------------------------- SUCH FUNKTION -------------------------

searchBar.addEventListener("submit", async (event) => {
  event.preventDefault();
  page = 1;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const url = `https://rickandmortyapi.com/api/character/?name=${data.query}`;
  searchQuery = data.query;
  fetchCharacters(url);
});

function showSearchResults(results) {
  cardContainer.innerHTML = "";

  results.forEach((result) => {
    const cardItem = createCharacterCard(result);
    cardContainer.append(cardItem);
  });
}
