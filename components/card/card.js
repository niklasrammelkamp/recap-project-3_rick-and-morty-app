export function createCharacterCard({ name, type, status, episode, image }) {
  if (type === "") {
    type = "no type";
  }
  const card = document.createElement("li");
  card.classList.add("card");

  const cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("card__image-container");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.setAttribute("src", image);
  cardImage.setAttribute("alt", name);

  const cardImageGradient = document.createElement("div");
  cardImageGradient.classList.add("card__image-gradient");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = name;

  const cardInfo = document.createElement("dl");
  cardInfo.classList.add("card__info");

  const cardInfoTitle1 = document.createElement("dt");
  cardInfoTitle1.classList.add("card__info-title");
  cardInfoTitle1.textContent = "Status";

  const cardInfoDescription1 = document.createElement("dd");
  cardInfoDescription1.classList.add("card__info-description");
  cardInfoDescription1.textContent = status;

  const cardInfoTitle2 = document.createElement("dt");
  cardInfoTitle2.classList.add("card__info-title");
  cardInfoTitle2.textContent = "Type";

  const cardInfoDescription2 = document.createElement("dd");
  cardInfoDescription2.classList.add("card__info-description");
  cardInfoDescription2.textContent = type;

  const cardInfoTitle3 = document.createElement("dt");
  cardInfoTitle3.classList.add("card__info-title");
  cardInfoTitle3.textContent = "Occurences";

  const cardInfoDescription3 = document.createElement("dd");
  cardInfoDescription3.classList.add("card__info-description");
  cardInfoDescription3.textContent = episode.length;

  card.append(cardImageContainer);
  cardImageContainer.append(cardImageGradient);
  cardImageContainer.append(cardImage);
  card.append(cardContent);
  cardContent.append(cardTitle);
  cardContent.append(cardInfo);
  cardInfo.append(cardInfoTitle1);
  cardInfo.append(cardInfoDescription1);
  cardInfo.append(cardInfoTitle2);
  cardInfo.append(cardInfoDescription2);
  cardInfo.append(cardInfoTitle3);
  cardInfo.append(cardInfoDescription3);
  return card;
}
