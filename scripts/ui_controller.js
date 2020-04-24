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
    var trainLineIndex = route.indexOf(trainLine);
    route.splice(trainLineIndex, 1);
}
