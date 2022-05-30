const start__button = document.querySelector("button");
const center__block = document.getElementsByClassName("body__block--center")[0];
start__button.addEventListener("click", () => {
  center__block.innerHTML = "";
  game.GameBlockInitialization();
})

const center__block__game = document.createElement("div");
center__block__game.className = "body__block--game";

class NewGame {
  GameBlockInitialization = () => {
    console.log(center__block__game);
    center__block.appendChild(center__block__game);
  }
}

game = new NewGame();