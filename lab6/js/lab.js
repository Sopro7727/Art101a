// index.js - Experiment and use arrays and objects
// Author: Noah Walker
// Date: April 28, 2024

// Constants
myTransport = ["Bus", "Walking" ,"E-Bike", "Rides from friends", "Uber"];
myMainRide = {
  make: "Volkswagen",
  model: "Jetta 2.5 SE",
  color: "Silver",
  year: 2012,
  age: function(){
    return 2024 - this.year;
  }
}
// Functions
myTransport.unshift(myMainRide.year + " " + myMainRide.make + " " + myMainRide.model);
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  document.writeln("Kinds of transportation that I use: " + myTransport.join(", "), "<br>");
  //delete myMainRide.fullkit;
  document.writeln("My Main Ride: <pre>" + JSON.stringify(myMainRide, null, "\t", "</pre>)"));
  // the code that makes everything happen
}

// let's get this party started
main();
