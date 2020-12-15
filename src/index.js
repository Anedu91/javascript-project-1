import "./css/main.css";
import { handleSubmit } from "./js/handleSubmit";
import { restart } from "./js/restart";
import "./static/anklyosaurus.png";
import "./static/brachiosaurus.png";
import "./static/elasmosaurus.png";
import "./static/human.png";
import "./static/pigeon.png";
import "./static/pteranodon.png";
import "./static/stegosaurus.png";
import "./static/triceratops.png";
import "./static/tyrannosaurus rex.png";

const form = document.querySelector("#form");
const button = document.querySelector("#restart");

form.addEventListener("submit", handleSubmit);

button.addEventListener("click", restart);
