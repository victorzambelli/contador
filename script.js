countNumber = 0

function add() {
    countNumber++
    showNumber()
}

function subtract() {
    countNumber--
    showNumber()
}

function showNumber() {
    countNumberString = document.getElementById("result")
    countNumberString.innerText = countNumber
}

showNumber()