// Global variables that define the current day and sets the time format

// Displays the current day and time
let currentDate = dayjs().format("dddd-MMMM-YYYY HH:mm:ss");
$("#currentDay").text(currentDate);

$(function () {
  let buttons = $(".saveBtn");

  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
    console.log(description);
    localStorage.setItem(parent, description);
  });

  // Removes all past, present and future classes if already present
  $(function () {
    $(".time-block").removeClass("past");
    $(".time-block").removeClass("present");
    $(".time-block").removeClass("future");

    // Compares the current hour with the ids of the elements which are numbered according to the hours.

    $(".time-block").each(function () {
      let id = $(this).attr("id");
      let currentHour = Number(dayjs().format("HH"));
      let split_id = id.split("-");
      let id_hr = Number(split_id[1]);

      /*  
  ***********************************************************************************************
  if a time-block has an hour smaller than the current hour, the past class will be alloted to it. 
  ***********************************************************************************************
  And if it is equal to the current hour, the present class will be given. 
  ***********************************************************************************************
  And if the hour is greater than the current hour, the future class will be given. 
    */
      if (id_hr < currentHour) {
        $(this).addClass("past");
      } else if (id_hr == currentHour) {
        $(this).addClass("present");
      } else if (id_hr > currentHour) {
        $(this).addClass("future");
      }
    });
  });

  /* Function to reset or apply all the saved values to time blocks. */

  // Takes the current date in DD-MM-YYYY format.
  let currentDay = dayjs().format("DD-MM-YYYY");

  // Takes the current date in DD-MM-YYYY format from local storage.
  let savedDay = localStorage.getItem("day");

  // Compares the current date with the date in local storage. If they are equal, the saved values will be applied to the time blocks.
  // If they are not equal, the local storage will be cleared and the current date will be saved in local storage.

  if (savedDay != null && savedDay != currentDay) {
    $(".time-block").each(function () {
      let id = $(this).attr("id");
      let data = localStorage.getItem(id);
      $("#" + id + " .description").val(data);
    });
  } else {
    $(".time-block").each(function () {
      let id = $(this).attr("id");
      $(id).val("");
      localStorage.setItem("day", currentDay);
      localStorage.setItem(id, "");
    });
  }
});
