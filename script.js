$(function() {
    $(".password-input").each(function() {
      var inputElement = $(this);
      var displayElement = false;
      if (!inputElement.data("display-element")) {
        displayElement = $("<ol>");
        displayElement.addClass("password-display-numbers");
        inputElement.data("display-element", displayElement);
        inputElement.after(displayElement);
      } else {
        displayElement = inputElement.data("display-element");
      }
      inputElement.on("input", function() {
        var password = inputElement.val();
        displayElement.html("");

        for (var i = 0; i < password.length; i++) {
          var characterElement = $("<li>");
          characterElement.html(password[i]);
          displayElement.append(characterElement);
        }
      });
    });
  });