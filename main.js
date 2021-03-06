const start__button = document.querySelector("button");
const start__block = document.querySelector(".start");
const game__block = document.querySelector(".body__block__game");
const rolls__divs = document.querySelectorAll('.game__rolls--rolls');
const button__roll = document.querySelector(".game__rolls--start");
const circle_img = document.getElementById("1");
const money__bank = document.querySelector(".money__bank");
const input__rate = document.querySelector("input");
const winning__result = document.querySelector(".winning__result--p");
const game__results = document.getElementsByClassName("game__results--all");
const winning__result__cash = document.querySelector(".winning__result--cash");

const startGame = () => {
  start__block.classList.remove("start");
  start__block.classList.add("start--none")
  game__block.classList.remove("body__block__game")
  game__block.classList.add("body__block__game--start");
}

start__button.addEventListener("click", startGame)

class Game {
  constructor(rolls_value) {
    this.rolls_value = rolls_value;
  }

  rolls_table = [];
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
  coins = 100;
  rate = 0;

  circles_all = 0;
  triangles_all = 0;
  rectangles_all = 0;
  pentagons_all = 0;
  stars_all = 0;

  checkWin = () => {
    let {
      coins,
      rate,
      circles_all,
      triangles_all,
      rectangles_all,
      pentagons_all,
      stars_all
    } = this;
    rate = input__rate.value;

    if (coins < rate || rate == 0) {
      alert("Nie masz pieni??dzy!");
    } else {
      coins = coins - rate;
      winning__result.style.color = "yellow";
      winning__result.textContent = "";
      winning__result__cash.textContent = "";


      let rolls_player = new Game(this.gameMoreLucky());
      const winning_table = rolls_player.rollingRolls();
      const lucky_items = {};
      winning_table.forEach(item => {
        lucky_items[item] = (lucky_items[item] || 0) + 1;
      });
      // console.log(lucky_items["circle"])
      
      if (lucky_items["circle"] === 4) {
        coins = coins + (rate * 2);
        winning__result.textContent = "Trafione 4 ko??a!";
        winning__result__cash.textContent = `Wygrana: ${rate * 2}$`;
      } else if (lucky_items["circle"] === 5) {
        coins = coins + (rate * 5);
        winning__result.style.color = "rgb(168, 74, 74)";
        winning__result.textContent = "Trafione 5 k????!";
        winning__result__cash.textContent = `Wygrana: ${rate * 5}$`;
        circles_all += 1;
        game__results[0].textContent = `Ko??a: ${circles_all}`;
      }

      if (lucky_items["triangle"] === 4) {
        coins = coins + (rate * 3);
        winning__result.textContent = "Trafione 4 tr??k??ty!";
        winning__result__cash.textContent = `Wygrana: ${rate * 3}$`;
      } else if (lucky_items["triangle"] === 5) {
        coins = coins + (rate * 10);
        winning__result.style.color = "rgb(168, 74, 74)";
        winning__result.textContent = "Trafione 5 tr??jk??t??w!";
        winning__result__cash.textContent = `Wygrana: ${rate * 10}$`;
        triangles_all += 1;
        game__results[1].textContent = `Tr??jk??ty: ${triangles_all}`;
      }

      if (lucky_items["rectangle"] === 4) {
        coins = coins + (rate * 4);
        winning__result.textContent = "Trafione 4 kwaraty!";
        winning__result__cash.textContent = `Wygrana: ${rate * 4}$`;
      } else if (lucky_items["rectangle"] === 5) {
        coins = coins + (rate * 15);
        winning__result.style.color = "rgb(168, 74, 74)";
        winning__result.textContent = "Trafione 5 kwadrat??w!";
        winning__result__cash.textContent = `Wygrana: ${rate * 15}$`;
        rectangles_all += 1;
        game__results[2].textContent = `Kwadraty: ${rectangles_all}`;
      }

      if (lucky_items["pentagram"] === 4) {
        coins = coins + (rate * 5);
        winning__result.textContent = "Trafione 4 pi??ciok??ty!";
        winning__result__cash.textContent = `Wygrana: ${rate * 5}$`;
      } else if (lucky_items["pentagram"] === 5) {
        coins = coins + (rate * 20);
        winning__result.style.color = "rgb(168, 74, 74)";
        winning__result.textContent = "Trafione 5 pi??ciok??t??w!";
        winning__result__cash.textContent = `Wygrana: ${rate * 20}$`;
        pentagons_all += 1;
        game__results[3].textContent = `Pi??ciok??ty: ${pentagons_all}`;
      }

      if (lucky_items["star"] === 4) {
        coins = coins + (rate * 6);
        winning__result.textContent = "Trafione 4 gwiazdy!";
        winning__result__cash.textContent = `Wygrana: ${rate * 6}$`;
      } else if (lucky_items["star"] === 5) {
        coins = coins + (rate * 25);
        winning__result.style.color = "rgb(168, 74, 74)";
        winning__result.textContent = "Trafione 5 gwiazd!";
        winning__result__cash.textContent = `Wygrana: ${rate * 25}$`;
        stars_all = stars_all + 1;
        game__results[4].textContent = `Gwiazdy: ${stars_all}`;
      }
      this.viewForPlayer(coins, circles_all, triangles_all, rectangles_all, pentagons_all, stars_all);
    }
  };

  viewForPlayer = (coins, circles, triangles, rectangles, pentagons, stars) => {
    money__bank.textContent = `Ilo???? pieni??dzy: ${coins}$`;
    this.coins = coins;
    this.circles_all = circles;
    this.triangles_all = triangles;
    this.rectangles_all = rectangles;
    this.pentagons_all = pentagons;
    this.stars_all = stars;
  }

  gameMoreLucky = () => {
    if (this.coins <= 60) {
      return ["circle", "triangle", "triangle", "triangle", "triangle", "rectangle", "rectangle", "rectangle", "pentagon", "star", "star", "star", "star", "star"];
    } else {
      return  ["circle", "triangle", "rectangle", "pentagon", "star"];
    }
  }
}

player = new Player;
button__roll.addEventListener("click", () => player.checkWin())