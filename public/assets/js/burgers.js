// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  // Add a new burger.
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      eaten: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Added new burger");
      // Reload the page to get the updated burger list.
      location.reload();
    });
  });

  $(".eatburger").on("click", function (event) {
    event.preventDefault();c 

    var id = $(this).data("id");
    var eatenState = {
      eaten: 1,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState,
    }).then(function () {
      console.log("Burger Eaten");
        location.reload();
      });
  });

  $(".returnburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
    }).then(location.reload());
  });
});
