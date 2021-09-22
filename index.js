const input_bar = document.getElementById("main-srch-bar").value;

var output = document.getElementById("placeholder");
var settings = document.getElementById("settings");

output.addEventListener("animationend", () => {
    output.style.display = "none";
})

document.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        Execute();
    }
    });

function Execute(){
    
    if(document.getElementById("main-srch-bar").value == "Time"){
        var dt = new Date();
        output.innerHTML = dt.toLocaleTimeString();
        output.style.display = "block";
    }

    if(document.getElementById("main-srch-bar").value == "Color"){
        settings.style.display = "block";
    }

}

function colorSelected(colorname){
    document.getElementById("main-srch-bar").style.color = colorname;
    output.style.color = colorname;
    settings.style.display = "none";
}