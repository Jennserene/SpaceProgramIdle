// Declare gameState object, this object contains all the main stats
var gameState = {
    science: 0,
    money: 0,
	missions: [],
};
// Run updateGameState 20 times a second
var inst = setInterval(updateGameState, 50);
// Every time this runs update the DOM to the current gameState
function updateGameState() {
	// apply effect of missions in progress
	for (let i = 0; i < gameState.missions.length; ++i)
	{
		gameState.science += gameState.missions[i].scienceRate;
		gameState.missions[i].duration--;
		if (gameState.missions[i].duration <= 0)
		{	// mission over
			// remove mission from gameState missions list
			gameState.missions.splice(i, 1); // this actually returns the removed item, but we don't need it
			--i; // if we don't do this, the next item in the missions list will be skipped in the loop
			// TODO: call a function to update the UI to show missions in progress
		}
	}
	// update UI
    document.getElementById('scienceNum').textContent = gameState.science;
    document.getElementById('moneyNum').textContent = gameState.money;
}
document.getElementById("launchButton").addEventListener("click", launchMission);
// On pressing Launch! button increment science by 1
function incrementScience() {
    gameState.science++;
}
function launchMission() {
	// TODO: get mission info from somewhere, instead of these hardcoded values
	let newMission = {
		launchCost: 1,
		scienceRate: 5, // science per time tick
		duration: 100, // count of time ticks
	}
	// TODO: check if we have enough money
	// apply immediate effects (launch cost)
	gameState.money -= newMission.launchCost;
	// set up ongoing effects to be handled by updateGameState
	gameState.missions.push(newMission);
	// TODO: call a function to update the UI to show missions in progress
}