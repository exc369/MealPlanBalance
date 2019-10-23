Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}

var today = new Date();
var f19_start_date = new Date(2019, 7, 28);
var f19_end_date = new Date(2019, 11, 19);
var days_in_semester = Date.daysBetween(f19_start_date, f19_end_date);
var days_remaining = Date.daysBetween(today, f19_end_date);

var freedom_dollars = document.getElementById("fdollars");
var gold19_dollars = document.getElementById("19dollars");
var block175_dollars = document.getElementById("175dollars");
var block125_dollars = document.getElementById("125dollars");
var block100_dollars = document.getElementById("100dollars");
var block50_dollars = document.getElementById("50dollars");
var block25_dollars = document.getElementById("25dollars");

var freedom_dollars_remaining, freedom_dollars_initial = 100;
var gold19_dollars_remaining, gold19_dollars_initial = 225;
var block175_dollars_remaining, block175_dollars_initial = 400;
var block125_dollars_remaining, block125_dollars_initial = 400;
var block100_dollars_remaining, block100_dollars_initial = 500;
var block50_dollars_remaining, block50_dollars_initial = 560;
var block25_dollars_remaining, block25_dollars_initial = 560;

var dollars_elements = [freedom_dollars, gold19_dollars, block175_dollars, block125_dollars, block100_dollars, block50_dollars, block25_dollars]
var initial_dollars = [freedom_dollars_initial, gold19_dollars_initial, block175_dollars_initial, block125_dollars_initial, block100_dollars_initial, block50_dollars_initial, block25_dollars_initial]
var remaining_dollars_amounts = []
console.log("Days in semester:", days_in_semester)
console.log("Days remaining:", days_remaining)

for (var k = 0; k < 7; k++) {
  var dollars_per_day = initial_dollars[k] / days_in_semester;
  remaining_dollars_amounts.push(Math.round(days_remaining * dollars_per_day))
}
for (var i = 0; i < dollars_elements.length; i++) {
  dollars_elements[i].innerHTML = remaining_dollars_amounts[i];
}