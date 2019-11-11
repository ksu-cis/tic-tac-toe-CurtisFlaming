// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


var turn = "x"


function setTurn() {
    var turnElement = document.getElementById("turn")
    turnElement.innerHTML = "It is player " + turn + "'s turn"
}

function onClick(event) {
    event.prevntDefault()
    if (!event.target.innerText) {
        event.target.innerText = turn
        if (turn === "x") {
            turn = "o"
        }
        else {
            turn = "x"
        }
        setTurn();
    }
}

var cells = document.getElementsByClassName("square")
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick)
}

setTurn()