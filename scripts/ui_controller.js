function trainDetailsToggle(){
console.log('hi')
}


function settingsToggle(){
    var settingsModal = document.getElementById("settingsModal");
    if (settingsModal.style.display === "none") {
        settingsModal.style.display = "block";
    } else {
        settingsModal.style.display = "none";
    }
}

function displayLinesToggle(trainLine){
    if (route.indexOf(trainLine) != -1){
        var trainLineIndex = route.indexOf(trainLine);
        route.splice(trainLineIndex, 1);
    }
    else {
        route.push(trainLine);
        console.log(route);
    }
}
