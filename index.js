let homeScore = 0
let awayScore = 0

let homeText = document.getElementById("Home")
let awayText = document.getElementById("Away")

function addHome1Point() {
    homeScore += 1
    homeText.textContent = homeScore
    highlightBox()
}

function addHome2Points() {
    homeScore += 2
    homeText.textContent = homeScore
    highlightBox()
}

function addHome3Points() {
    homeScore += 3
    homeText.textContent = homeScore
    highlightBox()
}

function addAway1Point() {
    awayScore += 1
    awayText.textContent = awayScore
    highlightBox()
}

function addAway2Points() {
    awayScore += 2
    awayText.textContent = awayScore
    highlightBox()
}

function addAway3Points() {
    awayScore += 3
    awayText.textContent = awayScore
    highlightBox()
}

function newGame() {
    homeScore = 0
    homeText.textContent = homeScore
    awayScore = 0
    awayText.textContent = awayScore
    highlightBox()
}

function highlightBox(){
    if(homeScore > awayScore){
        homeText.classList.add("highlight")
        awayText.classList.remove("highlight")
    } else if (homeScore < awayScore) {
        awayText.classList.add("highlight")
        homeText.classList.remove("highlight")
    } else {
        awayText.classList.remove("highlight")
        homeText.classList.remove("highlight")
    }

}
