let value = "X";
let count = 0;
let gameresult = false;
let WinningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function handler(e) {
  let item = e.target;
  item.innerText = value;
  if (value === "X") {
    value = "O";
  } else {
    value = "X";
  }
  item.removeEventListener("click", handler);
  findWinner();
}


let arr = document.querySelectorAll(".box");
arr.forEach((item, index) => {
  item.addEventListener("click", handler);
});
document.querySelector("button").addEventListener("click", () => {
  document.location.href = "index.html";
});
function findWinner() {
  for (const ar of WinningPattern) {
    let text1 = arr[ar[0]].innerText;
    let text2 = arr[ar[1]].innerText;
    let text3 = arr[ar[2]].innerText;
    if (text1 != "" && text2 != "" && text3 != "") {
      if (text1 == text2 && text2 == text3) {
        // gameresult = true;
        if (text1 === "X") {
          document.querySelector("h1").innerText = "1st Player is the winner";

          arr.forEach((item) => {
            item.removeEventListener("click", handler);
          });
          return;
        } 
        else {
          document.querySelector("h1").innerText = "2nd Player is the winner";
          arr.forEach((item) => {
            item.removeEventListener("click", handler);
          });
          return;
        }
      }
    }
  }
  let isBoardFull = true;
  arr.forEach((item) => {
    if (item.innerText === "") {
      isBoardFull = false;
    }
  });

  if (isBoardFull) {
    document.querySelector("h1").innerText = "It's a draw";
  }
}
