let yourWord = [
  {
    hello: "type of greeting",
  },
  { mouse: "type of rodent" },
  { apple: "type of fruit" },
  { tiger: "type of predators" },
  { honda: "cars brand" },
];
localStorage.setItem("Array2", JSON.stringify(yourWord));
let words1 = localStorage.getItem("Array2");
words1 = JSON.parse(words1);

let gusesWord1;
let describtion11;
const getGuses = () => {
  const obb = words1[Math.floor(Math.random() * words1.length)];
  const kk = Object.keys(obb);

  describtion11 = Object.values(obb);

  return kk;
};

const hangImage = document.createElement("img");
hangImage.setAttribute("src", "./hangman.png");
hangImage.setAttribute("width", "90%");
hangImage.setAttribute("height", "300");
hangImage.setAttribute("alt", "HANGMAN");
const hangImageParent = document.querySelector(".div22");
hangImageParent.append(hangImage);

const startButton = document.querySelector("#bstart");
const cb = (a) => {
  gusesWord1 = getGuses();
  addWord.innerText = describtion11[0];

  hangImage.setAttribute("src", "./hangman img1.png");
  hangImageParent.append(hangImage);

  startButton.removeEventListener("click", cb);
};

startButton.addEventListener("click", cb);

// /////////////////////////////////////
const dash = document.querySelectorAll(".divh6 h6");

const playAgainButton = document.createElement("button");
playAgainButton.innerText = "Play Again!";
const again = document.querySelector(".divagain");
const addWord = document.querySelector(".wordDIscription #dis");
const addWordButton = document.querySelector(".div211 button");

let counter = 6;
let winCounter = 0;
//////letters array
let letters1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const letters = document.querySelectorAll(" .div3 .div31 button ");
let gusesWord = ["h", "e", "l", "l", "o"];
let cc = [];
const result1 = (e) => {
  if (letters1.indexOf(e.target.innerText) >= 0) {
    if (gusesWord1.join(" ").split("").indexOf(e.target.innerText) >= 0) {
      for (let i = 0; i < gusesWord1.join(" ").split("").length; i++) {
        if (gusesWord1.join(" ").split("")[i] === e.target.innerText) {
          dash[i].innerText = gusesWord1.join(" ").split("")[i];
          cc[i] = gusesWord1.join(" ").split("")[i];
          e.target.style.color = "green";
          if (cc.join("") === gusesWord1.join("")) {
            hangImage.setAttribute("src", "./win.png");
            hangImageParent.append(hangImage);
            again.append(playAgainButton);
            letters[removeEventListener("click", result1)];
          }
        }
      }

      return dash;
    } else if (gusesWord1.join(" ").split("").indexOf(e.target.innerText) < 0) {
      e.target.style.color = "red";
      counter--;
      if (counter === 5) {
        hangImage.setAttribute("src", "./hangman img2.png");
        hangImageParent.append(hangImage);
      }
      if (counter === 4) {
        hangImage.setAttribute("src", "./hangman img3.png");
        hangImageParent.append(hangImage);
      }
      if (counter === 3) {
        hangImage.setAttribute("src", "./hangman img4.png");
        hangImageParent.append(hangImage);
      }
      if (counter === 2) {
        hangImage.setAttribute("src", "./hangman img5.png");
        hangImageParent.append(hangImage);
      }
      if (counter === 1) {
        hangImage.setAttribute("src", "./hangman img6.png");
        hangImageParent.append(hangImage);
      }
      if (counter === 0) {
        hangImage.setAttribute("src", "./hangman img7.png");
        hangImageParent.append(hangImage);
        again.append(playAgainButton);
        for (let i = 0; i < gusesWord1.join(" ").split("").length; i++) {
          dash[i].innerText = gusesWord1.join(" ").split("")[i];
          letters[removeEventListener("click", result1)];
        }
      }
    }
  }
};

letters[addEventListener("click", result1)];

const input11 = document.querySelector('[name="word"]');
const input22 = document.querySelector('[name="word2"]');

const wordAdded = () => {
  yourWord.push({
    [document.querySelector('[name="word"]').value]:
      document.querySelector('[name="word2"]').value,
  });
  localStorage.setItem("Array2", JSON.stringify(yourWord));
  yourwords1 = localStorage.getItem("Array2");
  words1 = JSON.parse(words1);
};
addWordButton.addEventListener("click", wordAdded);

const reset1 = (d) => {
  window.location.reload();
};
playAgainButton.addEventListener("click", reset1);
