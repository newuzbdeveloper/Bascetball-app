let scoreOfHome =  document.getElementById("scoreOfHomeTeam")

let count = 0

function addOneHome(){
    count += 1
    scoreOfHome.textContent = count

}

function addTwoHome(){
    count += 2
    scoreOfHome.textContent = count
}

function addThreeHome(){
    count += 3
    scoreOfHome.textContent = count
}

let scoreOfGuest = document.getElementById("scoreOfGuestTeam")
let countGuest = 0
function addOneGuest(){
    countGuest += 1
    scoreOfGuest.textContent = countGuest

}

function addTwoGuest(){
    countGuest += 2
    scoreOfGuest.textContent = countGuest
}

function addThreeGuest(){
    countGuest += 3
    scoreOfGuest.textContent = countGuest
}

