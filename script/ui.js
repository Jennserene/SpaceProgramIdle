function showTab(tabid)
{
    let tabContainer = document.getElementById('tabContainer');
    let tabs = tabContainer.children;
    // cycles through all the tabs every time the function is called
    for (i = 0; i < tabs.length; i++)
    {
        if (tabs[i].id == tabid) {
            // add active class if not present
            tabs[i].classList.add('active');
        } else {
            // remove active class if present
            tabs[i].classList.remove('active');
        }
    }
}
function showBldg(bldgid)
{
    let bldgContainer = document.getElementById(bldgid)
    if (bldgContainer.classList.contains('active')) {
        bldgContainer.classList.remove('active');
    } else {
        bldgContainer.classList.add('active');
    }
}