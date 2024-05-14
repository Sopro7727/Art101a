/*
   lab.js - This script adds buttons to different sections of the webpage and toggles a class on click

   Requirements: jQuery must be loaded for this script to work.

   Author: Noah Walker
   Date: 2023
*/

["challenge", "problems", "results"].forEach(section => {   //checks each section
  $(`#${section}`).append(`<button id='button-${section}'>Toggle ${section}</button>`) //adds a button to each object
      .click(function() {     //event listner for click
          $(`#${section}`).toggleClass("special").siblings().removeClass("special"); //toggles the class addition/removal
      });
});




