const start__button = document.querySelector("button");
const start__block = document.getElementsByClassName("start")[0];
const game__block = document.getElementsByClassName("body__block--game")[0];
const roll__items__table = [];

start__button.addEventListener("click", () => {
  start__block.style.display = "none";
  game__block.style.display = "flex";
})

class Game {
  rolls_table = [];
  rolls_value = {
    "rectangle": 5,
    "circle": 10,
    "square": 15,
    "pentagon": 20,
    "star": 25,
  };

  // return random items from dictionary
  rollingRolls = () => {
    this.rolls_table = [];
    const object_rolls_number = Object.keys(this.rolls_value);
    for (let i = 0; i < object_rolls_number.length; i++) {
      let number_of_rolls = Math.floor(Math.random() * object_rolls_number.length);
      let lukcy_object = object_rolls_number[number_of_rolls];
      this.rolls_table.push(lukcy_object);
    }
    return this.rolls_table;
  };
}

class Player {
  coins = 1000;
  rectangle_all = 0;
  circle_all = 0;
  sqaure_all = 0;

  checkWin = () => {
    let rolls_player = new Game;
    const winning_table = rolls_player.rollingRolls();
    console.log(winning_table);
  }
}


player = new Player;
player.checkWin();