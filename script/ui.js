document.getElementById("launchMenuButton").addEventListener("click", function(){ showTab('launch'); });
document.getElementById("researchMenuButton").addEventListener("click", function(){ showTab('research'); });
document.getElementById("townMenuButton").addEventListener("click", function(){ showTab('town'); });
document.getElementById("missionControlMenuButton").addEventListener("click", function(){ showTab('missionControl'); });
function showTab(tabid)
{
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
document.getElementById("apartmentTownButton").addEventListener("click", function(){ showBldg('apartmentDetails'); });
document.getElementById("constOfficeTownButton").addEventListener("click", function(){ showBldg('constOfficeDetails'); });
document.getElementById("officeTownButton").addEventListener("click", function(){ showBldg('officeDetails'); });
document.getElementById("mineTownButton").addEventListener("click", function(){ showBldg('mineDetails'); });
function showBldg(bldgid)
{
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