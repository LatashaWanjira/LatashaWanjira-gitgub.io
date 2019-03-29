$(document).ready(function() {
  $('#menuToggle').on('click', function() {
    $('#sideNavMenu').toggleClass("show hide");
  });
  $('#sideNavMenu li').on('click', function() {
    $('#sideNavMenu').addClass("hide");
    $('#sideNavMenu').removeClass("show");
  });

  $("#sideNavMenu a").click(function() {
    $(this).addClass("active");
    $("#sideNavMenu a").not(this).removeClass("active");
  })
});
