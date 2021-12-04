let words = ["hello", "mouse", "apple"];
// let gusesWord=[]
// let gusesWord=[words[math.floor(math.random()*words.length)]]
const hangImage = document.createElement("img");
hangImage.setAttribute("src", "./hangman.jpg");
hangImage.setAttribute("width", "100%");
hangImage.setAttribute("height", "300");
hangImage.setAttribute("alt", "The Pulpit Rock");
const hangImageParent = document.querySelector(".div22");
hangImageParent.append(hangImage);

const startButton = document.querySelector(".bstart");
const cb = (e) => {
  hangImage.setAttribute(
    "src",
    "https://image.shutterstock.com/image-vector/hang-man-game-handdrawn-on-260nw-1404275375.jpg"
  );
  hangImageParent.append(hangImage);
  console.log(`The ${e.target.innerText} has triggered the event`);
  return hangImage;
};
// const x=(e)=>{
//   console.log(e.target.innerText)
// }

startButton.addEventListener("click", cb);

// /////////////////////////////////////
const dash = document.querySelectorAll(".divh6 h6");
// dash[0].innerText="h"
// dash[1].innerText="e"
// dash[2].innerText="l"
// dash[3].innerText="l"
// dash[4].innerText="o"

//////letters array
const letters2 = document.querySelector(".div3 button");
const letters = document.querySelectorAll(".div3 button");
let gusesWord = ["a", "e", "l", "l", "o"];
const result1 = (e) => {
  if (letters2.innerText === gusesWord[0]) {
    console.log(letters2.innerText);
    dash[0].innerText = gusesWord[0];
    letters2.style.color = "green";
    return dash[0];
  }
};

letters2.addEventListener("click", result1);
