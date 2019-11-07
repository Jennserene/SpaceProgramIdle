document.getElementById("launchMenuButton").addEventListener("click", showTab);
document.getElementById("researchMenuButton").addEventListener("click", showTab);
document.getElementById("townMenuButton").addEventListener("click", showTab);
document.getElementById("missionControlMenuButton").addEventListener("click", showTab);
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
document.getElementById("apartmentTownButton").addEventListener("click", showBldg);
document.getElementById("constOfficeTownButton").addEventListener("click", showBldg);
document.getElementById("officeTownButton").addEventListener("click", showBldg);
document.getElementById("mineTownButton").addEventListener("click", showBldg);
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