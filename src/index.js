import example from "./images/1713241259668.jpeg";
import "./styles/main.scss";
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

const heading = document.createElement("h1");
heading.textContent = "Interesting!";

const app = document.querySelector("#root");
app.append(heading);
