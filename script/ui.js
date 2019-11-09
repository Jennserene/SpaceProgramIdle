function showTab(event)
{
    // retrieve tabid using event object and DOM user data (get value of data-tab attribute in HTML)
	let tabid = event.currentTarget.dataset.tab;
	// get main element so that it's children can be accessed
    let tabContainer = document.getElementById('tabContainer');
    // put main element's children in an array
    let tabs = tabContainer.children;
    // cycles through all the tabs every time the function is called
    for (i = 0; i < tabs.length; i++)
    {
        // if array with i index is the same as the button pressed then:
        if (tabs[i].id == tabid) {
            // add active class if not present
            tabs[i].classList.add('active');
        } else {
            // remove active class if present
            tabs[i].classList.remove('active');
        }
    }
}
function showBldg(event)
{
    // retrieve bldgid using event object and DOM user data (get value of data-bldg attribute in HTML)
	let bldgid = event.currentTarget.dataset.bldg;
    // get div with details that the button specifies
    let bldgContainer = document.getElementById(bldgid)
    // if the div's class contains active then:
    if (bldgContainer.classList.contains('active')) {
        // remove active class
        bldgContainer.classList.remove('active');
    } else {
        // else, if the div's class doesn't contain active, add active class
        bldgContainer.classList.add('active');
    }
}
function updateHeader(science, money)
{
    document.getElementById('scienceNum').textContent = science;
    document.getElementById('moneyNum').textContent = money;
}
function updateLaunchTab(readyMission)
{
    let statsDiv = document.getElementById('readyMissionStats');
    while (statsDiv.firstChild)
    {
        statsDiv.removeChild(statsDiv.firstChild);
    }
    let missionHeader = document.createElement('h2');
    missionHeader.append('Mission: ' + readyMission.missionName);
    let statsHeader = document.createElement('h3');
    statsHeader.append('Mission Stats');
    statsDiv.append(
        missionHeader,
        statsHeader,
        'Launch cost: ' + readyMission.costToLaunchMoney.toString(),
        document.createElement('br'),
        'Science rate: ' + readyMission.sciencePerSec.toString() + '/s',
        document.createElement('br'),
        'Duration: ' + (readyMission.missionDuration / 1000).toString() + 's',
        document.createElement('br'),
        'Science on completion: ' +  + readyMission.scienceOnCompletion.toString()
        );
}
for (let i = 0, buttons = document.getElementsByTagName("NAV")[0].getElementsByTagName("BUTTON"); i < buttons.length; ++i)
{
	buttons[i].addEventListener("click", showTab);
}
for (let i = 0, buttons = document.getElementById("town").getElementsByTagName("BUTTON"); i < buttons.length; ++i)
{
	buttons[i].addEventListener("click", showBldg);
}
document.getElementById("launchButton").addEventListener("click", launchMission);
