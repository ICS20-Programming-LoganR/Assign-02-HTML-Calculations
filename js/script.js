// Created by: Logan Rodriguez
// Created on: Apr 2022
// This file contains the JS functions for index.html

function calculate () {
  //function for determining the SA and V

  //get the height from the text field
  let Height = parseFloat(document.getElementById("pyramid-height").value)
	// get their base edge from the text field
  let Edge = parseFloat(document.getElementById("base-edge").value)
  // get the slope from the textfield
  let Slope = parseFloat(document.getElementById("pyramid-slope").value)
  //Display the answer
  document.getElementById('answer').innerHTML = "The surface area is " + (2 * Edge * Slope + Edge ** 2) + "cm²"
    document.getElementById('volume').innerHTML = "volume is " + (1/3 * Edge * Height).toFixed(2) + "cm³"
}