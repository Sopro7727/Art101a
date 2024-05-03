// index.js - Experiment with functions to take user input
// Author: Noah Walker
// Date: May 2, 2024

// Constants

// Functions
function sortNames(userName){
  console.log("userName =", userName);
  var nArray = userName.split('');
  console.log("nameArray =", nArray);
  var nArraySort = nArray.sort();
  console.log("nameArraySort =", nArraySort);
  var nSorted = nArraySort.join('');
  console.log("nameSorted =", nSorted);
  return nSorted;
}
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
}

function main() {
    let userName = window.prompt("Hi, What's your name?");
    console.log(userName);
    console.log("Main function started.");
    let sortedName = sortNames(userName);
    document.writeln("I fixed your name: ", sortedName, "</br>");
}
  
  // let's get this party started
  main();
  