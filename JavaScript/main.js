let boxex = document.querySelectorAll(".box");
let box = document.querySelector(".box");
let AllBoxes = document.querySelector(".boxes");
let head = document.querySelector(".head");
let squares = [];
function end(num1, num2, num3, num4, num5, num6, num7, num8, num9) {
  head.innerHTML = `The ${squares[num1]} Wins`;
  document.getElementById("item" + num1).style.backgroundColor = "#008dff";
  document.getElementById("item" + num2).style.backgroundColor = "#008dff";
  document.getElementById("item" + num3).style.backgroundColor = "#008dff";
  document.getElementById("item" + num5).style.backgroundColor = "#222";
  document.getElementById("item" + num6).style.backgroundColor = "#222";
  document.getElementById("item" + num7).style.backgroundColor = "#222";
  document.getElementById("item" + num8).style.backgroundColor = "#222";
  document.getElementById("item" + num9).style.backgroundColor = "#222";
  document.getElementById("item" + num4).style.backgroundColor = "#222";

  setInterval(function () {
    head.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3900);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    end(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    end(4, 5, 6, 1, 2, 3, 7, 8, 9);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    end(7, 8, 9, 4, 5, 6, 1, 2, 3);
  }

  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    end(1, 5, 9, 2, 3, 4, 6, 7, 8);
  }

  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    end(3, 5, 7, 1, 2, 6, 4, 8, 9);
  }
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    end(1, 4, 7, 2, 5, 8, 3, 6, 9);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    end(2, 5, 8, 1, 4, 7, 3, 6, 9);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    end(3, 6, 9, 2, 5, 8, 1, 4, 7);
  }
}

// Array.from(boxex).every((box) => box.innerHTML !== "")

boxex.forEach((box) => {
  box.addEventListener("click", function () {
    if (box.innerHTML == "") {
      if (head.innerHTML == "X") {
        box.innerHTML = "X";
        head.innerHTML = "O";
      } else {
        box.innerHTML = "O";
        head.innerHTML = "X";
      }
    }

    if (Array.from(boxex).every((box) => box.innerHTML !== "")) {
      head.innerHTML = "No one has won";
      boxex.forEach((box) => {
        box.style.backgroundColor = "#222";
      });

      setInterval(function () {
        head.innerHTML += ".";
      }, 1000);
      setTimeout(function () {
        location.reload();
      }, 3900);
    }

    winner();
  });
});
