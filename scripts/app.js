angular.module('ngDashboard', ['ui.bootstrap']);

var month = 0;
var startDate = new Date(2016, month + 1, -30); 
var weekStart = 0;
var weekEnd = 0;
var weekDropDownTxt = "Week " + month + ": " + '<span class="sub-txt">' + weekStart + " - " + weekEnd + '</span>'; 



/*
console.log(startDate);
console.log(weekDropDownTxt);
*/




// Populate Week Selection HTML based off of chosen week
//angular.module("weekSelectionApp", [])

// Populate Month Selection HTML based off of chosen month

// Populate Annual Sales HTML using data from selections

// CLICK ON SELECT WEEK
   // drop down menu of week list animates down
       // dates are based off of calender month of chosen month in Month Selection
   // select week changes graph and information
   // select day and change value
      // animate map to utilize new value in all maps

// CLICK ON SELECT MONTH
   // drop down menu of month list animates down
   // select month changes graph and information
   		//as bars go up and down variable on top counts up or down to the right number

// CLICK ON MONTH IN ANNUAL SALES
   // in Month Selection month changes to what was selected
