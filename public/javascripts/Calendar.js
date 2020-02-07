// Setup the calendar with the current date

$(document).ready(function() {
  let date = new Date();
  // console.log("this is ", date);
  let today = date.getDate();
  // Set click handlers for DOM elements
  $(".right-button").click({ date: date }, next_year);
  $(".left-button").click({ date: date }, prev_year);
  $(".month").click({ date: date }, month_click);
  $("#add-button").click({ date: date }, new_event);
  // Set current month as active
  $(".months-row")
    .children()
    .eq(date.getMonth())
    .addClass("active-month");
  init_calendar(date);
  let events = check_events(today, date.getMonth() + 1, date.getFullYear());
  
  show_events(events, months[date.getMonth()], today);
});

// Initialize the calendar by appending the HTML dates
function init_calendar(date) {
  $(".tbody").empty();
  $(".events-container").empty();
  let calendar_days = $(".tbody");
  let month = date.getMonth();
  let year = date.getFullYear();
  let day_count = days_in_month(month, year);
  let row = $("<tr class='table-row'></tr>");
  let today = date.getDate();
  // Set date to 1 to find the first day of the month
  date.setDate(1);
  let first_day = date.getDay();
  // 35+firstDay is the number of date elements to be added to the dates table
  // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
  let day = 0;
  for (let i = 0; i < 35 + first_day; i++) {
    // Since some of the elements will be blank,
    // need to calculate actual date from index
    day = i - first_day + 1;
    // If it is a sunday, make a new row
    if (i % 7 === 0) {
      calendar_days.append(row);
      row = $("<tr class='table-row'></tr>");
    }
    // if current index isn't a day in this month, make it blank
    if (i < first_day || day > day_count) {
      let curr_date = $("<td class='table-date nil'>" + "</td>");
      row.append(curr_date);
    } else {
      let curr_date = $("<td class='table-date'>" + day + "</td>");
      let events = check_events(day, month + 1, year); 
      if (today === day && $(".active-date").length === 0) {
        curr_date.addClass("active-date");
        show_events(events, months[month], day);
      }
      // If this date has any events, style it with .event-date
      if (events.length !== 0) {
        curr_date.addClass("event-date");
      }
      // Set onClick handler for clicking a date
      curr_date.click(
        { events: events, month: months[month], day: day },
        date_click
      );
      row.append(curr_date);
    }
  }

  // Append the last row and set the current year
  calendar_days.append(row);
  $(".year").text(year);
}

// Get the number of days in a given month/year
function days_in_month(month, year) {
  let monthStart = new Date(year, month, 1);
  let monthEnd = new Date(year, month + 1, 1);
  return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
}

// Event handler for when a date is clicked
function date_click(event) {
  $(".events-container").show(250);
  $("#dialog").hide(250);
  $(".active-date").removeClass("active-date");
  $(this).addClass("active-date");
  show_events(event.data.events, event.data.month, event.data.day);
}

// Event handler for when a month is clicked
function month_click(event) {
  $(".events-container").show(250);
  $("#dialog").hide(250);
  let date = event.data.date;
  $(".active-month").removeClass("active-month");
  $(this).addClass("active-month");
  let new_month = $(".month").index(this);
  date.setMonth(new_month);
  init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
  $("#dialog").hide(250);
  let date = event.data.date;
  let new_year = date.getFullYear() + 1;
  $("year").html(new_year);
  date.setFullYear(new_year);
  init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
  $("#dialog").hide(250);
  let date = event.data.date;
  let new_year = date.getFullYear() - 1;
  $("year").html(new_year);
  date.setFullYear(new_year);
  init_calendar(date);
}

// Event handler for clicking the new event button
function new_event(event) {
  // if a date isn't selected then do nothing
  if ($(".active-date").length === 0) return;
  // remove red error input on click
  $("input").click(function() {
    $(this).removeClass("error-input");
  });
  // empty inputs and hide events
  $("#dialog input[type=text]").val("");
  $("#dialog input[type=time]").val("");
  //possibly here
  $(".events-container").hide(250);
  $("#dialog").show(250);
  // Event handler for cancel button
  $("#cancel-button").click(function() {
    $("#name").removeClass("error-input");
    $("#time").removeClass("error-input");
    $("#dialog").hide(250);
    $(".events-container").show(250);
  });
  // Event handler for ok button
  $("#ok-button")
    .unbind()
    .click({ date: event.data.date }, function() {
      let date = event.data.date;
      let name = $("#name")
        .val()
        .trim();
      let time = parseInt(
        $("#time")
          .val()
          .trim()
      );
      let timmy = parseInt(
        $("#timmy")
          .val()
          .trim()
      );
      let day = parseInt($(".active-date").html());
      // Basic form validation
      if (name.length === 0) {
        $("#name").addClass("error-input");
      } else if (isNaN(time)) {
        $("#time").addClass("error-input");
      }else if (isNaN(timmy)) {
        $("#timmy").addClass("error-input");
      } else {
        $("#dialog").hide(250);
        new_event_json(name, time, timmy, date, day);
        date.setDate(day);
        init_calendar(date);
      }
    });
}

// Adds a json event to event_data
function new_event_json(name, time, timmy, date, day) {
  let event = {
    name: name,
    start_time: time,
    end_time: timmy, 
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: day
  };
  event_data["events"].push(event);
  console.log('event', event)



//SENDING DATA

  const bookingFormLink = document.createElement("a");
  bookingFormLink.innerText = "BOOK NOW!";
  bookingFormLink.setAttribute(
    "href",
    `/bookingform?event_name=${name}&start_time=${time}&end_time=${time}&event_day=${day}&event_month=${event.month}&event_year=${event.year}`
  );
  document.getElementById("bookingFormLinkDiv").appendChild(bookingFormLink);

  document.getElementById("eventInfo").value = event.name;
}

// Display all events of the selected date in card views
function show_events(events, month, day) {
  // Clear the dates container
  $(".events-container").empty();
  $(".events-container").show(250);
  // If there are no events for this date, notify the user
  if (events.length === 0) {
    let event_card = $("<div class='event-card'></div>");
    let event_name = $(
      "<div class='event-name'>There are no events planned for " +
        month +
        " " +
        day +
        ".</div>"
    );
    $(event_card).css({ "border-left": "10px solid #FF1744" });
    $(event_card).append(event_name);
    $(".events-container").append(event_card);
  } else {
    // Go through and add each event as a card to the events container
    for (let i = 0; i < events.length; i++) {
      let event_card = $("<div class='event-card'></div>");
      let event_name = $(
        "<div class='event-name'>" + events[i]["name"] +  ":" + events[i]["start_time"] + "-" + events[i]["end_time"] + "</div>"
      );
      // let event_time = $(
      //   "<div class='event-count'>" +
      //     events[i]["start_time"] +
      //     " Booked</div>"
      // );
      $(event_card)
        .append(event_name)
        // .append(event_time);
      $(".events-container").append(event_card);
    }
  }
}

// Checks if a specific date has any events
function check_events(day, month, year) {
  let events = [];
  for (let i = 0; i < event_data["events"].length; i++) {
    let event = event_data["events"][i];
    if ( 
      event["day"] === day &&
      event["month"] === month &&
      event["year"] === year
    ) {
      events.push(event);
    }
  } 
  return events;
}

// Given data for events in JSON format



const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// console.log('day', day);
// module.exports = { day, today, events, calendar_days, month, year, day_count, row, first_day, curr_date, monthStart, monthEnd, new_year, new_month, name, count, months, event_card, event_count, event_data, event_name, events }
