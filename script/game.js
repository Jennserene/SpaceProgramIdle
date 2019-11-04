var gameState = {
    science: 0,
    money: 0,
};
var inst = setInterval(updateGameState, 100);
function updateGameState() {
    let scienceNum = document.getElementById('scienceNum');
    scienceNum.innerHTML = gameState.science;
}
function incrementScience() {
    gameState.science++;
}