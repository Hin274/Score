let homeScore = 0
let awayScore = 0

let homeText = document.getElementById("Home")
let awayText = document.getElementById("Away")

function addHome1Point(){
    homeScore += 1
    homeText.textContent = homeScore
    console.log("Add 1 point to Home team")
}

function addHome2Points(){
    homeScore += 2
    homeText.textContent = homeScore
    console.log("Add 2 points to Home team")
}

function addHome3Points(){
    homeScore += 3
    homeText.textContent = homeScore
    console.log("Add 3 points to Home team")
}

function addAway1Point(){
    awayScore += 1
    awayText.textContent = awayScore
    console.log("Add 1 point to Away team")
}

function addAway2Points(){
    awayScore += 2
    awayText.textContent = awayScore
    console.log("Add 2 point to Away team")
}

function addAway3Points(){
    awayScore += 3
    awayText.textContent = awayScore
    console.log("Add 3 point to Away team")
}

function reset(){
    homeScore = 0
    homeText.textContent = homeScore
    awayScore = 0
    awayText.textContent = awayScore
    console.log("Reset score")
}