const start__button = document.querySelector("button");
const start__block = document.getElementsByClassName("start")[0];
const game__block = document.getElementsByClassName("body__block--game")[0];
const rolls__divs = document.querySelectorAll('.game__rolls--rolls');
const button__roll = document.querySelector(".game__rolls--start");
const circle_img = document.getElementById("1");

start__button.addEventListener("click", () => {
  start__block.style.display = "none";
  game__block.style.display = "flex";
})

class Game {
  rolls_table = [];
  rolls_value = ["circle", "triangle", "rectangle", "pentagon", "star"];
  rolls_quantity = 5;

  // return random items in img
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
  rate = 1;

  rectangles_all = 0;
  circles_all = 0;
  triangles_all = 0;
  squares_all = 0;
  pentagons_all = 0;
  stars_all = 0;

  checkWin = () => {
    let rolls_player = new Game;
    const winning_table = rolls_player.rollingRolls();
    const lucky_items = {};
    winning_table.forEach(item => {
      lucky_items[item] = (lucky_items[item] || 0) + 1;
    });
    // console.log(lucky_items["circle"]) - to jak to działa można tak sprawdzić
    if (lucky_items["circle"] === 3) {}
    lucky_items["circle"] === 3 ? console.log("trzy circle!") : lucky_items["circle"] === 4 ? console.log("cztery circle!") : lucky_items["circle"] === 5 ? console.log("Rozbito bank circle!") : null;
    lucky_items["triangle"] === 3 ? console.log("trzy trójkąty!") : lucky_items["triangle"] === 4 ? console.log("cztery triangle!") : lucky_items["triangle"] === 5 ? console.log("Rozbito bank triangle!") : null;
    lucky_items["rectangle"] === 3 ? console.log("trzy rectangle!") : lucky_items["rectangle"] === 4 ? console.log("cztery rectangle!") : lucky_items["rectangle"] === 5 ? console.log("Rozbito bank rectangle!") : null;
    lucky_items["pentagon"] === 3 ? console.log("trzy pentagon!") : lucky_items["pentagon"] === 4 ? console.log("cztery pentagon!") : lucky_items["pentagon"] === 5 ? console.log("Rozbito bank pentagon!") : null;
    lucky_items["star"] === 3 ? console.log("trzy star!") : lucky_items["star"] === 4 ? console.log("cztery star!") : lucky_items["star"] === 5 ? console.log("Rozbito bank star!") : null;

  }

}


player = new Player;
button__roll.addEventListener("click", () => player.checkWin())