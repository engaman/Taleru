var snav = document.getElementById("shownav");
var navcon = document.getElementsByClassName("navcnd");
var navg = document.getElementById("navg");
var io = 0;
navcon[1].style.display = "none";

function show() {
    if (io == 0) {
        navcon[1].style.display = "inline";
        navcon[0].style.display = "none";
        navg.style.animationName = "expand";
        navg.style.animationPlayState = "running";
        navg.style.width = "200px";
        navg.style.height = "300px";
        io = 1;
    }
    else if (io == 1) {
        navcon[0].style.display = "inline";
        navcon[1].style.display = "none";
        navg.style.animationName = "contract";
        navg.style.animationPlayState = "running";
        navg.style.width = "50px";
        navg.style.height = "50px";

        io = 0;
    }
}
function hide() {
    if (navg.style.position == "fixed") {
        io = 0;
        navcon[0].style.display = "inline";
        navcon[1].style.display = "none";
        navg.style.animationName = "contract";
        navg.style.animationPlayState = "running";
        navg.style.width = "50px";
        navg.style.height = "50px";
    }
    else {
        alert("Mission p");
    }
}
