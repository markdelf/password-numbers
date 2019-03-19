$(function() {
    // Bind each password input
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

      // On input, show the character
      inputElement.on("input", function() {
        var password = inputElement.val();
        displayElement.html("");

        for (var i = 0; i < password.length; i++) {
          var characterElement = $("<li>");
          characterElement.html(password[i]);

          // Click event on each item
          characterElement.click(function(){
            $(this).toggleClass("reveal");
          });
          displayElement.append(characterElement);
        }
      });
    });

    // Controls
    $("input[name='options']").on("change", function(){
        var passwordUi = $(".password-ui");
        passwordUi.find(".password-display-numbers li").removeClass("reveal");
         switch ($(this).val()) {
             case "show":
                passwordUi.addClass("reveal");
             break;
             case "hide":
                passwordUi.removeClass("reveal");
             break;
         }
    });
  });