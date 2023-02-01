let homeScore = 0
let awayScore = 0

let homeText = document.getElementById("Home")
let awayText = document.getElementById("Away")

function addHome1Point() {
    homeScore += 1
    homeText.textContent = homeScore
}

function addHome2Points() {
    homeScore += 2
    homeText.textContent = homeScore
}

function addHome3Points() {
    homeScore += 3
    homeText.textContent = homeScore
}

function addAway1Point() {
    awayScore += 1
    awayText.textContent = awayScore
}

function addAway2Points() {
    awayScore += 2
    awayText.textContent = awayScore
}

function addAway3Points() {
    awayScore += 3
    awayText.textContent = awayScore
}

function newGame() {
    homeScore = 0
    homeText.textContent = homeScore
    awayScore = 0
    awayText.textContent = awayScore
}