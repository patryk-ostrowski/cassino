const start__button = document.querySelector("button");
const start__block = document.getElementsByClassName("start")[0];
const game__block = document.getElementsByClassName("body__block--game")[0];
const rolls__divs = document.querySelectorAll('.game__rolls--rolls');
const button__roll = document.querySelector(".game__rolls--start");
const circle_img = document.getElementById("1")

console.log(circle_img);
console.log(rolls__divs);

start__button.addEventListener("click", () => {
  start__block.style.display = "none";
  game__block.style.display = "flex";
})

class Game {
  rolls_table = [];
  rolls_value = ["circle", "triangle", "rectangle", "pentagon", "star"];
  rolls_quantity = 5;

  // return random items ald view in div
  rollingRolls = () => {
    const {
      rolls_value,
      rolls_quantity,
    } = this;
    let {
      rolls_table
    } = this;

    rolls_table = [];
    for (let i = 0; i < rolls_quantity; i++) {
      rolls__divs[i].textContent = "";
      let number_of_rolls = Math.floor(Math.random() * rolls_value.length);
      let lucky_object = rolls_value[number_of_rolls];
      rolls_table.push(lucky_object);
      const img_to_display = document.createElement("img");
      switch (lucky_object) {
        case "circle":
          img_to_display.src = "images/circle.png";
          break;
        case "triangle":
          img_to_display.src = "images/triangle.png";
          break;
        case "rectangle":
          img_to_display.src = "images/rectangle.png";
          break;
        case "pentagon":
          img_to_display.src = "images/pentagon.png";
          break;
        case "star":
          img_to_display.src = "images/star.png";
          break;
      }
      rolls__divs[i].appendChild(img_to_display);
    }

    return rolls_table;
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
button__roll.addEventListener("click", () => player.checkWin())