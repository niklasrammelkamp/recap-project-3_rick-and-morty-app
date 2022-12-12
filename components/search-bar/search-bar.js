//import { createCharacterCard } from "../card/card.js";
console.clear();

//const searchInput = document.querySelector('[data-js="search-bar_inputField"]');

export function getSearchResults(searchBar) {
  searchBar.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data.query);
    const url = `https://rickandmortyapi.com/api/character/?name=${data.query}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        const searchResults = data.results;
        return searchResults; // searchResults is an Array of Objects

        /*
        searchResults.forEach((result) => {
          // createCharacterCard(result);
          console.log(result);
        });*/
      } else {
        console.error("Response is not okay");
      }
    } catch (error) {
      console.error(error);
    }
  });
}
