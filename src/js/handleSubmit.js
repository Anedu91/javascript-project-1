import { Human, createDino } from "./data-constructors";
import { Dinos } from "../api/index";
import { tileTemplate } from "./tileTemplate";

const handleSubmit = (event) => {
  event.preventDefault();
  const cardContainer = document.querySelector("#cardContainer");
  const button = document.querySelector("#restart");
  const name = document.querySelector("#name").value;
  const feet = parseFloat(document.querySelector("#feet").value);
  const inches = parseFloat(document.querySelector("#inches").value);
  const size = feet * 12 + inches;
  const weight = parseFloat(document.querySelector("#weight").value);
  const diet = document.querySelector("#diet").value;

  const { userHuman, dinoInstances } = (function () {
    const userHuman = Human(name, size, weight, diet);

    // Creating instances of Dinos from DB and including the human object from the form
    let dinoInstances = createDino(Dinos.list()).map((e) => {
      const dinoAndHuman = Object.assign(e, userHuman);
      return dinoAndHuman;
    });
    return { userHuman, dinoInstances };
  })();
  //Adding human to the grid
  cardContainer.appendChild(tileTemplate(userHuman.humanName, true));
  const humanCard = cardContainer.lastChild;
  humanCard.classList.add("center");

  //Adding dinos to the grid
  dinoInstances.forEach((e) => {
    cardContainer.appendChild(tileTemplate(e.species, false, e.random()));
  });

  form.reset();
  button.classList.remove("hidden");

  form.classList.add("hidden");
};

export { handleSubmit };
