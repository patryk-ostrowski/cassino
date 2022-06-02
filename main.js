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

  rectangles = 0;
  circles = 0;
  triangles = 0;
  squares = 0;
  pentagons = 0;
  stars = 0;

  rectangles_all = 0;
  circles_all = 0;
  triangles_all = 0;
  squares_all = 0;
  pentagons_all = 0;
  stars_all = 0;

  checkWin = () => {
    let rolls_player = new Game;
    const winning_table = rolls_player.rollingRolls();
    console.log(winning_table);
    winning_table.forEach(item => {
      if (item === "circle") {
        this.circles += 1;
      } else if (item === "triangle") {
        this.triangles += 1;
      } else if (item === "rectangle") {
        this.rectangles += 1;
      } else if (item === "pentagon") {
        this.pentagons += 1;
      } else {
        this.stars += 1
      }
    })
    if (this.circles == 3) {
      console.log("3 koła!");
    } else if (this.triangles == 3) {
      console.log("3 trójkąty!");
    } else if (this.squares == 3) {
      console.log("3 kwadraty!");
    } else if (this.pentagons == 3) {
      console.log("3 pięciokąty!");
    } else if (this.stars == 3) {
      console.log("3 gwiazdy!");
    } else {
      console.log("Nie ma nic :(");
    }
    this.rectangles = 0;
    this.circles = 0;
    this.triangles = 0;
    this.squares = 0;
    this.pentagons = 0;
    this.stars = 0;
  }

}


player = new Player;
button__roll.addEventListener("click", () => player.checkWin())