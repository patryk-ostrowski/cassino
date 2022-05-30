const start__button = document.querySelector("button");
const start__block = document.getElementsByClassName("start")[0];
const game__block = document.getElementsByClassName("body__block--game")[0];
start__button.addEventListener("click", () => {
  start__block.style.display = "none";
  game__block.style.display = "flex";
})

class NewGame {
  GameBlockInitialization = () => {
    console.log(center__block__game);
    center__block.appendChild(center__block__game);
  }
}

game = new NewGame();