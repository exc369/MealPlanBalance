Date.daysBetween = function(date1, date2) {
  //Get 1 day in milliseconds
  var one_day = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.round(difference_ms / one_day);
};

function getCurrentSemester(today) {
  const time = today.getTime();
  const f19 = {
    start: new Date(2019, 7, 28),
    end: new Date(2019, 11, 19)
  };
  const s20 = {
    start: new Date(2019, 0, 22),
    end: new Date(2019, 4, 14)
  };
  const f20 = {
    start: new Date(2019, 0, 22),
    end: new Date(2019, 4, 14)
  };
  const s21 = {
    start: new Date(2019, 0, 22),
    end: new Date(2019, 4, 14)
  };
  const f21 = {
    start: new Date(2019, 0, 22),
    end: new Date(2019, 4, 14)
  };
  const s22 = {
    start: new Date(2019, 0, 22),
    end: new Date(2019, 4, 14)
  };
  const semesters = [f19, s20, f20, s21, f21, s22];

  for (var sem_index = 0; sem_index < semesters.length; sem_index++) {
    if (
      time < semesters[sem_index].end.getTime() &&
      time > semesters[sem_index].start.getTime()
    ) {
      return semesters[sem_index];
    } else {
      return { start: null, end: null };
    }
  }
}

const today = new Date();
var semester = getCurrentSemester(today);

if (semester.start == null) {
  var out_of_semester_text = (document.getElementById(
    "out_of_semester_text"
  ).innerHTML = "Current between semesters; no meal plans are active.");
} else {
  var days_in_semester = Date.daysBetween(semester.start, semester.end);
  const days_remaining = Date.daysBetween(today, semester.end);

  const freedom_dollars = document.getElementById("fdollars");
  const gold19_dollars = document.getElementById("19dollars");
  const block175_dollars = document.getElementById("175dollars"),
    block175_swipes = document.getElementById("175swipes");
  const block125_dollars = document.getElementById("125dollars"),
    block125_swipes = document.getElementById("125swipes");
  const block100_dollars = document.getElementById("100dollars"),
    block100_swipes = document.getElementById("100swipes");
  const block50_dollars = document.getElementById("50dollars"),
    block50_swipes = document.getElementById("50swipes");
  const block25_dollars = document.getElementById("25dollars"),
    block25_swipes = document.getElementById("25swipes");

  var freedom_dollars_initial = 100;
  var gold19_dollars_initial = 225;
  var block175_dollars_initial = 400,
    block175_swipes_initial = 175;
  var block125_dollars_initial = 400,
    block125_swipes_initial = 125;
  var block100_dollars_initial = 500,
    block100_swipes_initial = 100;
  var block50_dollars_initial = 560,
    block50_swipes_initial = 50;
  var block25_dollars_initial = 560,
    block25_swipes_initial = 25;

  var dollars_elements = [
    freedom_dollars,
    gold19_dollars,
    block175_dollars,
    block125_dollars,
    block100_dollars,
    block50_dollars,
    block25_dollars
  ];
  var initial_dollars = [
    freedom_dollars_initial,
    gold19_dollars_initial,
    block175_dollars_initial,
    block125_dollars_initial,
    block100_dollars_initial,
    block50_dollars_initial,
    block25_dollars_initial
  ];
  var remaining_dollars_amounts = [];

  var swipes_elements = [
    block175_swipes,
    block125_swipes,
    block100_swipes,
    block50_swipes,
    block25_swipes
  ];
  var initial_swipes = [
    block175_swipes_initial,
    block125_swipes_initial,
    block100_swipes_initial,
    block50_swipes_initial,
    block25_swipes_initial
  ];
  var remaining_swipes_amount = [];
  for (var k = 0; k < 7; k++) {
    var dollars_per_day = initial_dollars[k] / days_in_semester;
    remaining_dollars_amounts.push(
      Math.round(days_remaining * dollars_per_day)
    );
    dollars_elements[k].innerHTML = "$" + remaining_dollars_amounts[k];
    
    if (k > 1) {
      var swipes_per_day = initial_swipes[k-2] / days_in_semester;
      remaining_swipes_amount.push(Math.round(days_remaining * swipes_per_day));
      swipes_elements[k-2].innerHTML = remaining_swipes_amount[k-2];
    }
  }
}
