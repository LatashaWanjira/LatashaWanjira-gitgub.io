$(document).ready(function() {
  // Toggle the sideNavMenu
  $('#menuToggle').on('click', function() {
    $('#sideNavMenu').toggleClass("show hide");
    $('#menuToggle i').toggleClass("fa-times fa-bars");
  });
  $('#sideNavMenu li').on('click', function() {
    $('#sideNavMenu').addClass("hide");
    $('#sideNavMenu').removeClass("show");
  });

  // Adding active class to selected link
  $("#sideNavMenu a").click(function() {
    $(this).addClass("active");
    $("#sideNavMenu a").not(this).removeClass("active");
  })

  // Filtering projects based on skills
  $('.filter-btns li a').click(function() {
    var ourClass = $(this).attr('class');
    $('.filter-btns li').removeClass('active-btn');
    $(this).parent().addClass('active-btn');
    if (ourClass == 'all') {
      $('.project-cards').children('div.project-card').show();
    } else {
      $('.project-cards').children('div:not(.' + ourClass + ')').hide();
      $('.project-cards').children('div.' + ourClass).show();
    }
    return false;
  });
});
