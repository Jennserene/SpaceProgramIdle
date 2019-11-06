// Declare gameState object, this object contains all the main stats
var gameState = {
    science: 0,
    money: 0,
};
// Run updateGameState 10 times a second
var inst = setInterval(updateGameState, 100);
// Every time this runs update the DOM to the current gameState
function updateGameState() {
    let scienceNum = document.getElementById('scienceNum');
    let moneyNum = document.getElementById('moneyNum');
    scienceNum.innerHTML = gameState.science;
    moneyNum.innerHTML = gameState.money;
}
document.getElementById("launchButton").addEventListener("click", incrementScience);
// On pressing Launch! button increment science by 1
function incrementScience() {
    gameState.science++;
}