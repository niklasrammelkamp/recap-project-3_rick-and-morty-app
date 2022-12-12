console.clear();

export async function getSearchResults(url) {
  //const url = `https://rickandmortyapi.com/api/character/?name=${searchInput}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
      return data;
    } else {
      console.error("Response is not okay");
      alert("No Results found");
    }
  } catch (error) {
    console.error(error);
  }
}
