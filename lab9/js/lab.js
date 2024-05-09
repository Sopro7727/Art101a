// index.js - This simple javascript/jQuery script uses buttons to modify some elements on the page
// Requirements - jQuery must be loaded for this script to work
// Author: Noah Walker
// Date: May 7, 2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  $(".nSpec").each(function(){
    $(this).append("<button id = 'button-challenge'>Make Special</button>");
    console.log(this);
  });

  $(this).click(function(){
    $(this).parent().toggleClass("special");
    console.log(this + "clicked");
  });

  function main() {
    console.log("Main function started.");
   
  }
  
  // let's get this party started
  main();
  