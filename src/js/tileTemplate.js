const tileTemplate = (name, isHuman, fact = "") => {
  const card = document.createElement("div");
  const cardContent = `
  <img src="./static/${
    isHuman ? "human" : name.toLowerCase()
  }.png" class="max-w-full lg:w-2/3">
  <h3 class="text-2xl font-bold">${name}</h3>
  <p>${isHuman ? "" : fact}</p>`;

  card.innerHTML = cardContent;

  return card;
};

export { tileTemplate };
