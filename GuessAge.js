var youngCount = 0;
var middleCount = 0;
var oldCount = 0;

function young() {
    youngCount++ + 1;

    //document.getElementById("firstQ").style.display = "none";
}

function middle() {
    middleCount++ + 1;
}

function old() {
    oldCount++ + 1;
}

function results() {

    console.log("LOL")
    if (youngCount >= 5) {
        document.getElementById("resultTxt").innerHTML = 'You are 0-21 years old';
        document.getElementById("youngAge").style.opacity = "1";
    }

    if (middleCount >= 5) {
        document.getElementById("resultTxt").innerHTML = 'You are 21-40 years old';
        document.getElementById("middleAge").style.opacity = "1";
    }

    if (oldCount >= 5) {
        document.getElementById("resultTxt").innerHTML = 'You are 40+ years old';
        document.getElementById("grandma").style.opacity = "1";
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (oldCount == 3 && middleCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 26+ years old';
        document.getElementById("middleAge").style.opacity = "1";
    }

    if (oldCount == 3 && youngCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 23+ years old';
        document.getElementById("middleAge").style.opacity = "1";
    }

    if (youngCount == 3 && middleCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 12+ years old';
        document.getElementById("youngAge").style.opacity = "1";
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (oldCount == 2 && middleCount == 2) {
        document.getElementById("resultTxt").innerHTML = 'You are 16+ years old';
        document.getElementById("youngAge").style.opacity = "1";
    }

    if (oldCount == 2 && youngCount == 2) {
        document.getElementById("resultTxt").innerHTML = 'You are 18+ years old';
        document.getElementById("youngAge").style.opacity = "1";
    }

    if (youngCount == 3 && middleCount == 2) {
        document.getElementById("resultTxt").innerHTML = 'You are 12+ years old';
        document.getElementById("youngAge").style.opacity = "1";
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (oldCount == 4 && middleCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 26+ years old';
        document.getElementById("middleAge").style.opacity = "1";
    }

    if (oldCount == 4 && youngCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 21+ years old';
        document.getElementById("youngAge").style.opacity = "1";
    }

    if (youngCount == 4 && middleCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 14+ years old';
        document.getElementById("youngAge").style.opacity = "1";
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (oldCount == 3 && middleCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 38+ years old';
        document.getElementById("grandma").style.opacity = "1";
    }

    if (oldCount == 3 && youngCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 25+ years old';
        document.getElementById("middleAge").style.opacity = "1";
    }

    if (youngCount == 3 && middleCount == 3) {
        document.getElementById("resultTxt").innerHTML = 'You are 14+ years old';
        document.getElementById("youngAge").style.opacity = "1";
    }
}
/*
setTimeout(popup ,3000)

function popup() {
    
} 3000;
*/