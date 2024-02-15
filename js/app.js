var detailsContainers = {
    'thuya': document.getElementById("thuya"),
    'stan': document.getElementById("stan"),
    'gri': document.getElementById("gri"),
};
var display= 1;

function show(continerId){

    for(var key in detailsContainers){
        detailsContainers[key].classList.remove('active');
    }

    if(detailsContainers[continerId]){
        detailsContainers[continerId].classList.add('active')
    }
}

