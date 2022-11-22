// Global variables that define the current day and sets the time format

// Displays the current day and time
let currentDate = dayjs().format("dddd-MMMM-YYYY HH:mm:ss");
$("#currentDay").text(currentDate);

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$(function () {
  let buttons = $(".saveBtn");

  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
    console.log(description);
    localStorage.setItem(parent, description);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // The code needs to remove all past, present and future classes if already present
  $(function () {
    $(".time-block").removeClass("past");
    $(".time-block").removeClass("present");
    $(".time-block").removeClass("future");
    // The codes needs to compare the current hour with the ids of the elements which are numbered according to the hours.
    $(".time-block").each(function () {
      let id = $(this).attr("id");
      let currentHour = Number(dayjs().format("HH"));
      let split_id = id.split("-");
      let id_hr = Number(split_id[1]);

      /*  if a time-block has an hour smaller than the current hour, the past class will be alloted to it. And if it is equal to the current
  hour, the present class will be given. And if the hour is greater than the current hour, the future class will be given. */
      if (id_hr < currentHour) {
        $(this).addClass("past");
      } else if (id_hr == currentHour) {
        $(this).addClass("present");
      } else if (id_hr > currentHour) {
        $(this).addClass("future");
      }
    });
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  //  Function to reset or apply all the saved values to time blocks.

  // Will take the current date in DD-MM-YYYY format.
  let currentDay = dayjs().format("DD-MM-YYYY");

  // TODO: Add code to display the current date in the header of the page.
});
