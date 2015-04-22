var placeSideBar = function() {
  var docWidth = $(document).width();
  var maxWidth = parseInt($(".body").css("max-width"), 10);
  var padding = parseInt($(".body").css("padding-right"), 10);
  var right = Math.max(padding, (docWidth - maxWidth) / 2);
  $("nav").css("right", right + "px");
};

placeSideBar();
$(window).resize(placeSideBar);
