// start with rise section in view
$("#rise").removeClass("hidden");
$("#amazon").addClass("hidden");
$("#nlplogix").addClass("hidden");
$("#revscripter").addClass("hidden");

// if rise-header is clicked
  // show rise
  // hide amazon
  // hide nlplogix
  // hide revscripter

  // add highlight to rise-header
  // remove highlight from amazon-header
  // remove highlight in nlplogix-header
  // remove highlight in revscripter-header
$("#rise-header").on("click", function() {
  $("#rise").removeClass("hidden");
  $("#amazon").addClass("hidden");
  $("#nlplogix").addClass("hidden");
  $("#revscripter").addClass("hidden");

  $("#rise-header").addClass("highlight");
  $("#amazon-header").removeClass("highlight");
  $("#nlplogix-header").removeClass("highlight");
  $("#revscripter-header").removeClass("highlight");
});


// if amazon-header is clicked
  // hide rise
  // show amazon
  // hide nlplogix
  // hide revscripter

  // add highlight to rise-header
  // remove highlight from amazon-header
  // remove highlight in nlplogix-header
  // remove highlight in revscripter-header
  $("#amazon-header").on("click", function() {
    $("#rise").addClass("hidden");
    $("#amazon").removeClass("hidden");
    $("#nlplogix").addClass("hidden");
    $("#revscripter").addClass("hidden");

    $("#rise-header").removeClass("highlight");
    $("#amazon-header").addClass("highlight");
    $("#nlplogix-header").removeClass("highlight");
    $("#revscripter-header").removeClass("highlight");
  });
  

// if nlplogix-header is clicked
  // hide rise
  // hide amazon
  // show nlplogix
  // hide revscripter
  
  // add highlight to rise-header
  // remove highlight from amazon-header
  // remove highlight in nlplogix-header
  // remove highlight in revscripter-header
  $("#nlplogix-header").on("click", function() {
    $("#rise").addClass("hidden");
    $("#amazon").addClass("hidden");
    $("#nlplogix").removeClass("hidden");
    $("#revscripter").addClass("hidden");

    $("#rise-header").removeClass("highlight");
    $("#amazon-header").removeClass("highlight");
    $("#nlplogix-header").addClass("highlight");
    $("#revscripter-header").removeClass("highlight");
  });
  

// if revscripter-header is clicked
  // hide rise
  // hide amazon
  // hide nlplogix
  // show revscripter
  
  // add highlight to rise-header
  // remove highlight from amazon-header
  // remove highlight in nlplogix-header
  // remove highlight in revscripter-header
  $("#revscripter-header").on("click", function() {
    $("#rise").addClass("hidden");
    $("#amazon").addClass("hidden");
    $("#nlplogix").addClass("hidden");
    $("#revscripter").removeClass("hidden");

    $("#rise-header").removeClass("highlight");
    $("#amazon-header").removeClass("highlight");
    $("#nlplogix-header").removeClass("highlight");
    $("#revscripter-header").addClass("highlight");
  });
  