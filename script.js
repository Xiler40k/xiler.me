var numberOfClicks = 0;
var EventActive = true;
let mode = "light"

function toggleDarkMode(rbm) {
    if (mode == "light") { mode = "dark" } else { mode = "light" }
    console.log(mode)

    let items = new Array();
    // Add names of the items you want to add the darkmode tag to here (e.g. if you wanted to add another one called "tag", then change it to ["body", "button", "ul", ".fa.fa-grip-lines", "h1", "li", "tag"])
    let names = ["body", "button", "ul", ".fa.fa-grip-lines", "h1", "li"]
    for(let i = 0; i < names.length; i++) {
        items = [...items, ...document.querySelectorAll(names[i])]
    }
    items.forEach(function(item) {
        // item.classList.toggle("dark-mode");
        if(rbm && item == document.body && mode == "light"){
            item.classList.toggle("rainbow-mode")
        }
    });
}   


function startup() {
    if (localStorage.getItem("theme") != "light") {
        toggleDarkMode();
    }
}



document.getElementById("dark-mode").addEventListener("click", function() {
    if (EventActive) {
        numberOfClicks++
        toggleDarkMode(false);
        if (numberOfClicks >= 5) {
            EventActive = false;
        }

        if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

    } else {
        toggleDarkMode(true);
    } 
});



function changeModeText() {
    var element = document.getElementById("mode-text");
    if (element.innerHTML.includes("Dark")) {
        element.innerHTML = ' Light Mode <i class="fas fa-power-off"></i></button> ';
        } else {
        element.innerHTML = ' Dark Mode <i class="fas fa-power-off"></i></button> ';
        }
    }
