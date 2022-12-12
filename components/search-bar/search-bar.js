console.clear();

export async function getSearchResults(searchInput) {
  const url = `https://rickandmortyapi.com/api/character/?name=${searchInput}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const searchResults = data.results;
      console.log(searchResults);
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
}
