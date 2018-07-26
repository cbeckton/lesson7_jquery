/*
Program Name: Recipe Display Application
Author: Chelsea Beckton
Date: July 19, 2018
Filename: drill4.js
*/

/* global $ */

//displays the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn(“slow”);
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

//displays and animates the next element after the current target function display2(event) {
$(event.currentTarget).next().animate( {height: ‘toggle’}, “slow”); }//end of display2
//attach event listener to h3 elements to invoke display function when clicked $("h3").click(display2);
//$("h3").click(display);