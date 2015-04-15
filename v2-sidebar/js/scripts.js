var placeSideBar = function() {
  var docWidth = $(document).width();
  var maxWidth = parseInt($(".body").css("max-width"), 10);
  var right = Math.max(0, (docWidth - maxWidth) / 2);
  $("nav").css("right", right + "px");
};

placeSideBar();
$(window).resize(placeSideBar);
