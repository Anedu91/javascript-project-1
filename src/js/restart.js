const restart = () => {
  const cardContainer = document.querySelector("#cardContainer");
  const button = document.querySelector("#restart");
  form.classList.remove("hidden");
  cardContainer.innerHTML = "";
  button.classList.add("hidden");
};

export { restart };
