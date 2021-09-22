const input_bar = document.getElementById("main-srch-bar").value;
var output = document.getElementById("placeholder");

output.addEventListener("animationend", () => {
    output.style.display = "none";
})

document.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        time();
    }
    });

function time(){
    if(document.getElementById("main-srch-bar").value == "Time"){
        var dt = new Date();
        output.innerHTML = dt.toLocaleTimeString();
        output.style.display = "block";
    }
}