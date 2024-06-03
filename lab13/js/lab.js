// index.js - Working with your partner, experiment with loops.
// Author: Noah Walker
// Date: June 6, 2024
maxFactors = 4;

outputEl = document.getElementById("output");

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}
function getFactorObject() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}



function fizzBuzzBoom(maxNums, factorObj) {
    for (var num=0; num<maxNums; num++) {
        debugger;
        var outString = "";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                outString += factorObj[factor];
            }
        }
        if (outString) {
            outString = " - " + outString + "!";
        }
        outputToPage(num.toString() + outString)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObject();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    // clear error if there is one
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})
